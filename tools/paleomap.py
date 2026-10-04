"""Builds the two "Back then" maps from today's NASA terrain.

Today's ice on Antarctica and Greenland is painted green first, as the forest
that grew there before the ice sheets came (see ICE_SINCE).

Every piece of land in img/map/earth.webp is given to one of a handful of
plates, and each plate is turned, as one solid piece, to roughly where it sat
150 and 70 million years ago. Neighbouring coasts are fitted back together the
way Bullard first did it - pick points on two coasts that once touched and find
the turn that brings them together - and an ocean that has only half opened is
given half of that turn. Simplified for children: the right shape of the world
at the time, not a scientific reconstruction.

    python3 tools/paleomap.py

writes img/map/then-220.webp, then-150, then-70 and then-66, and prints the plate
rotations that index.html uses to carry the fossil sites along with the land.

    python3 tools/paleomap.py --drift

also draws img/map/drift/000.webp to 220.webp, the world every five million
years, which the map flips through to show the land moving. In between the two
ages each plate turns smoothly along the same axis, exactly as index.html moves
the pins (turnAt there, rotation_at here).
"""
import json, math, os, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), "..")
SRC = os.path.join(ROOT, "img/map/earth.webp")
W, H = 4096, 2048
AGES = (220, 150, 70, 66)     # the Triassic, the Jurassic, the late Cretaceous, the asteroid

# Coasts that once touched, as (lat, lon) on the moving plate -> on its anchor.
FITS = {
    "na": ("eu", [((70, -22), (66, 12)), ((60, -43), (57, -8)), ((47, -53), (43, -9))]),
    "af": ("na", [((33, -9), (44, -63)), ((21, -17), (35, -75)), ((12, -17), (27, -79))]),
    "sa": ("af", [((-1, -45), (5, -4)), ((-5.5, -35.2), (2.5, 9.8)), ((-13, -38.5), (-1, 9)),
                  ((-23, -42), (-12, 13.6)), ((-34, -53), (-25, 14.8))]),
    "an": ("af", [((-71, -10), (-34, 26)), ((-70, 15), (-27, 33)), ((-68, 40), (-17, 44))]),
    "in": ("af", [((8.1, 77.5), (-24, 47.5)), ((15, 74), (-16, 50.5)), ((21, 72), (-12, 49.3))]),
    "au": ("an", [((-35, 116), (-66, 100)), ((-32, 132), (-67, 125)), ((-38, 141), (-68, 140)),
                  ((-43, 147), (-70, 160))]),
}
# how closed each ocean still was: 1 = the coasts still touching, 0 = as today
CLOSED = {
    220: {"na": 1.0, "af": 1.0, "sa": 1.0, "an": 1.0, "in": 1.0, "au": 1.0},
    150: {"na": 1.0, "af": 0.85, "sa": 1.0, "an": 1.0, "in": 1.0, "au": 1.0},
    70:  {"na": 0.95, "af": 0.45, "sa": 0.5, "an": 0.4, "in": 0.5, "au": 0.95},
}
# Eurasia is the one plate placed outright: (lat, lon) its middle moves to
EURASIA = {220: (32, 52), 150: (40, 60), 70: (45, 60)}
EURASIA_NOW = (50, 60)
ORDER = ["eu", "na", "af", "sa", "an", "in", "au"]

# Seas that covered low land at the time, as (lon, lat) outlines on today's map
SEAS = {
    70: [  # the Western Interior Seaway, from the Gulf of Mexico to the Arctic
        [(-106, 28), (-90, 29), (-89, 33), (-92, 38), (-95, 43), (-97, 48), (-98, 53),
         (-102, 58), (-108, 63), (-118, 68), (-128, 70), (-138, 70), (-125, 63), (-118, 58),
         (-113, 53), (-111, 47), (-109, 41), (-108, 35)],
    ],
}


def unit(lat, lon):
    la, lo = np.radians(lat), np.radians(lon)
    return np.stack([np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)], -1)


def axis_angle(axis, ang):
    axis = np.asarray(axis, float)
    n = np.linalg.norm(axis)
    if n < 1e-12 or abs(ang) < 1e-12:
        return np.eye(3)
    x, y, z = axis / n
    c, s, t = math.cos(ang), math.sin(ang), 1 - math.cos(ang)
    return np.array([[t*x*x + c, t*x*y - s*z, t*x*z + s*y],
                     [t*x*y + s*z, t*y*y + c, t*y*z - s*x],
                     [t*x*z - s*y, t*y*z + s*x, t*z*z + c]])


def carry(a, b):
    a, b = unit(*a), unit(*b)
    return axis_angle(np.cross(a, b), math.acos(max(-1, min(1, float(a @ b)))))


def fit(pairs):
    """the turn that best lays the first coast of each pair onto the second (Kabsch)"""
    P = np.array([unit(*p) for p, _ in pairs])
    Q = np.array([unit(*q) for _, q in pairs])
    U, _, Vt = np.linalg.svd(P.T @ Q)
    d = np.sign(np.linalg.det(Vt.T @ U.T))
    return Vt.T @ np.diag([1, 1, d]) @ U.T


def part(R, f):
    """the same turn about the same axis, only f of the way"""
    ang = math.acos(max(-1, min(1, (np.trace(R) - 1) / 2)))
    if ang < 1e-9:
        return np.eye(3)
    axis = np.array([R[2, 1] - R[1, 2], R[0, 2] - R[2, 0], R[1, 0] - R[0, 1]])
    return axis_angle(axis, ang * f)


def rotations(age):
    rot = {"eu": carry(EURASIA_NOW, EURASIA[age])}
    for name in ORDER[1:]:
        anchor, pairs = FITS[name]
        rot[name] = rot[anchor] @ part(fit(pairs), CLOSED[age][name])
    return rot


def rotation_at(name, t):
    """a plate's turn t million years ago: from today to 70 along one axis,
    then on from 70 to 150 along another, and from 150 to 220 along a third"""
    r70, r150, r220 = rotations(70)[name], rotations(150)[name], rotations(220)[name]
    if t <= 70:
        return part(r70, t / 70)
    if t <= 150:
        return r70 @ part(r70.T @ r150, (t - 70) / 80)
    return r150 @ part(r150.T @ r220, (t - 150) / 70)


def sea_at(t):
    """how deep the inland seas of 70 million years ago are, t million years ago"""
    return max(0.0, 1 - abs(t - 70) / 40)


def plate_of(lat, lon):
    """which plate a piece of today's land belongs to"""
    lab = np.full(lat.shape, "eu", dtype=object)
    lab[(lon < -30) | ((lat > 59) & (lon < -12))] = "na"
    lab[(lon > -82) & (lon < -30) & (lat < 12.5) & ~((lat > 7) & (lon < -77))] = "sa"
    af = (lon > -20) & (lon < 52) & (lat < 37.4)
    af &= ~((lon > -6.5) & (lon < 0) & (lat > 36.0))      # Spain, across Gibraltar
    af &= ~((lon >= 11) & (lon < 30) & (lat > 34))        # Sicily, Crete
    af &= ~((lon >= 30) & (lon < 36) & (lat > 32.2))      # Cyprus, Turkey
    arabia = (lon >= 35) & (lon < 60) & (lat > 12) & (lat < 37.3 - (lon - 42).clip(0) * 0.62)
    lab[af | arabia | ((lon > 40) & (lon < 51) & (lat < -11) & (lat > -26))] = "af"
    india = (lon > 66) & (lon < 92.5) & (lat > 5) & (lat < 35 - (lon - 72).clip(0) * 0.36)
    india &= ~((lon < 70) & (lat > 25.5))
    lab[india] = "in"
    au = (lon > 112) & (lat < -9.5) & (lat > -48)
    au |= (lon > 130.5) & (lon < 155) & (lat < 0) & (lat > -12)  # New Guinea
    au |= (lon > 165) & (lat < -33) & (lat > -48)                   # New Zealand
    lab[au] = "au"
    lab[lat < -60] = "an"
    return lab


# Ice came late. 66 million years ago and before, the world was far warmer and
# there were no ice sheets: Antarctica and Greenland were green with forest.
# Antarctica's ice sheet grew about 34 million years ago, Greenland's only
# about 3 million years ago, so the in-between worlds put the ice back then.
ICE_SINCE = {"antarctica": 34, "greenland": 3, "arctic": 3, "patagonia": 7}
FOREST_DARK = np.array([26, 50, 26], float)
FOREST_LIGHT = np.array([92, 116, 62], float)


def ice_areas(lat, lon):
    """where today's ice sheets lie: all of Antarctica, and Greenland"""
    greenland = (lat > 59) & (lat < 84) & (lon > -75) & (lon < -10)
    return {"antarctica": lat < -60,
            "greenland": greenland,
            "arctic": (lat > 60) & ~greenland,              # the ice caps on the islands of the far north
            "patagonia": (lat < -40) & (lat >= -60)}        # the ice fields at the tip of South America


def green_ice(src, lat, lon, land, t):
    """today's ice painted over as the forest that grew there t million years ago:
    the ice's own light and shade kept, so its mountains and valleys still show"""
    out = src.astype(float).copy()
    lum = out.mean(-1) / 255.0
    sat = out.max(-1) - out.min(-1)
    # forest is never one flat colour: a soft mottle of darker and lighter woods
    rng = np.random.default_rng(66)
    h, w = lum.shape
    mottle = sum(np.array(Image.fromarray((rng.random((h // f + 1, w // f + 1)) * 255).astype(np.uint8))
                          .resize((w, h), Image.BICUBIC)) / 255.0 * wgt for f, wgt in ((64, .5), (16, .3), (4, .2)))
    for name, where in ice_areas(lat, lon).items():
        if t < ICE_SINCE[name]:
            continue
        icy = where & land & (lum > 0.45) & (sat < 60)
        if name == "antarctica":
            icy = where & land     # bare rock there was forest too
        k = (((lum - 0.55) / 0.45).clip(0, 1) * 0.55 + mottle * 0.45)[..., None]
        out[icy] = (FOREST_DARK + (FOREST_LIGHT - FOREST_DARK) * k)[icy]
    return out.clip(0, 255).astype(np.uint8)


OCEAN = np.array([14, 24, 58], float)
SHALLOW = np.array([40, 104, 136], float)


def build(t, src, labels, land, W=W, H=H):
    sh, sw = src.shape[:2]
    # the drowned lowlands of the time, painted on today's map before anything moves
    sea = Image.new("L", (sw, sh), 0)
    draw = ImageDraw.Draw(sea)
    for poly in SEAS[70]:
        draw.polygon([((lo + 180) / 360 * sw, (90 - la) / 180 * sh) for lo, la in poly], fill=255)
    sea = np.array(sea.filter(ImageFilter.GaussianBlur(sw / 300))) / 255.0 * sea_at(t)

    lat = 90 - (np.arange(H) + 0.5) * 180 / H
    lon = -180 + (np.arange(W) + 0.5) * 360 / W
    LON, LAT = np.meshgrid(lon, lat)
    v = unit(LAT, LON)
    out = np.zeros((H, W, 3), float)
    out[:] = OCEAN
    filled = np.zeros((H, W), bool)
    drown = np.zeros((H, W), float)
    rot = {name: rotation_at(name, t) for name in ORDER}
    for name in ORDER[::-1]:     # the first in ORDER is drawn last and wins an overlap
        back = v @ rot[name]     # the inverse turn, applied to every pixel
        blat = np.degrees(np.arcsin(back[..., 2].clip(-1, 1)))
        blon = np.degrees(np.arctan2(back[..., 1], back[..., 0]))
        y = ((90 - blat) / 180 * sh).astype(int).clip(0, sh - 1)
        x = ((blon + 180) / 360 * sw).astype(int).clip(0, sw - 1)
        hit = land[y, x] & (labels[y, x] == name)
        out[hit] = src[y[hit], x[hit]]
        drown[hit] = sea[y[hit], x[hit]]
        filled |= hit
    # inland seas: shallow water with the land faintly showing through
    lum = out.mean(-1, keepdims=True) / 255.0
    water = SHALLOW * (0.75 + 0.5 * lum)
    out = out * (1 - drown[..., None] * 0.85) + water * (drown[..., None] * 0.85)
    # a band of shallow sea round every coast
    m = Image.fromarray((filled * 255).astype(np.uint8))
    k = max(3, round(13 * W / 4096) | 1)
    shelf = np.array(m.filter(ImageFilter.MaxFilter(k)).filter(ImageFilter.GaussianBlur(6 * W / 4096))) / 255.0
    coast = OCEAN + (SHALLOW - OCEAN) * shelf[..., None] * 0.85
    out[~filled] = coast[~filled]
    return out.clip(0, 255).astype(np.uint8)


def main():
    Image.MAX_IMAGE_PIXELS = None
    src = np.array(Image.open(SRC).convert("RGB").resize((W, H), Image.LANCZOS))
    lat = 90 - (np.arange(H) + 0.5) * 180 / H
    lon = -180 + (np.arange(W) + 0.5) * 360 / W
    LON, LAT = np.meshgrid(lon, lat)
    labels = plate_of(LAT, LON)
    r, g, b = (src[..., i].astype(int) for i in range(3))
    land = ~((b > r + 18) & (b > g + 6))
    if "--drift" in sys.argv:
        # the in-between worlds only show while they move, so small is enough
        small = np.array(Image.fromarray(src).resize((2048, 1024), Image.LANCZOS))
        sl = 90 - (np.arange(1024) + 0.5) * 180 / 1024
        so = -180 + (np.arange(2048) + 0.5) * 360 / 2048
        SO, SL = np.meshgrid(so, sl)
        slabels = plate_of(SL, SO)
        r, g, b = (small[..., i].astype(int) for i in range(3))
        sland = ~((b > r + 18) & (b > g + 6))
        os.makedirs(os.path.join(ROOT, "img/map/drift"), exist_ok=True)
        for t in range(0, 221, 5):
            Image.fromarray(build(t, green_ice(small, SL, SO, sland, t), slabels, sland, 1024, 512)).save(
                os.path.join(ROOT, "img/map/drift/%03d.webp" % t), quality=72, method=6)
    else:
        for age in AGES:
            Image.fromarray(build(age, green_ice(src, LAT, LON, land, age), labels, land)).save(
                os.path.join(ROOT, "img/map/then-%d.webp" % age), quality=80, method=6)
    table = {name: {str(age): [round(float(x), 5) for x in rotations(age)[name].flatten()]
                    for age in (220, 150, 70)} for name in ORDER}
    print(json.dumps(table, separators=(",", ":")))


if __name__ == "__main__":
    main()
