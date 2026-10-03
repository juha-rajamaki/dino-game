"""Builds the two "Back then" maps from today's NASA terrain.

Every piece of land in img/map/earth.webp is given to one of a handful of
plates, and each plate is turned, as one solid piece, to roughly where it sat
150 and 70 million years ago. Neighbouring coasts are fitted back together the
way Bullard first did it - pick points on two coasts that once touched and find
the turn that brings them together - and an ocean that has only half opened is
given half of that turn. Simplified for children: the right shape of the world
at the time, not a scientific reconstruction.

    python3 tools/paleomap.py

writes img/map/then-150.webp and img/map/then-70.webp, and prints the plate
rotations that index.html uses to carry the fossil sites along with the land.
"""
import json, math, os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), "..")
SRC = os.path.join(ROOT, "img/map/earth.webp")
W, H = 4096, 2048
AGES = (150, 70)

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
    150: {"na": 1.0, "af": 0.85, "sa": 1.0, "an": 1.0, "in": 1.0, "au": 1.0},
    70:  {"na": 0.95, "af": 0.45, "sa": 0.5, "an": 0.4, "in": 0.5, "au": 0.95},
}
# Eurasia is the one plate placed outright: (lat, lon) its middle moves to
EURASIA = {150: (40, 60), 70: (45, 60)}
EURASIA_NOW = (50, 60)
ORDER = ["eu", "na", "af", "sa", "an", "in", "au"]

# Seas that covered low land at the time, as (lon, lat) outlines on today's map
SEAS = {
    70: [  # the Western Interior Seaway, from the Gulf of Mexico to the Arctic
        [(-106, 28), (-90, 29), (-89, 33), (-92, 38), (-95, 43), (-97, 48), (-98, 53),
         (-102, 58), (-108, 63), (-118, 68), (-128, 70), (-138, 70), (-125, 63), (-118, 58),
         (-113, 53), (-111, 47), (-109, 41), (-108, 35)],
    ],
    150: [],
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


OCEAN = np.array([14, 24, 58], float)
SHALLOW = np.array([40, 104, 136], float)


def build(age, src, labels, land):
    sh, sw = src.shape[:2]
    # the drowned lowlands of the time, painted on today's map before anything moves
    sea = Image.new("L", (sw, sh), 0)
    draw = ImageDraw.Draw(sea)
    for poly in SEAS[age]:
        draw.polygon([((lo + 180) / 360 * sw, (90 - la) / 180 * sh) for lo, la in poly], fill=255)
    sea = np.array(sea.filter(ImageFilter.GaussianBlur(sw / 300))) / 255.0

    lat = 90 - (np.arange(H) + 0.5) * 180 / H
    lon = -180 + (np.arange(W) + 0.5) * 360 / W
    LON, LAT = np.meshgrid(lon, lat)
    v = unit(LAT, LON)
    out = np.zeros((H, W, 3), float)
    out[:] = OCEAN
    filled = np.zeros((H, W), bool)
    drown = np.zeros((H, W), float)
    rot = rotations(age)
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
    shelf = np.array(m.filter(ImageFilter.MaxFilter(13)).filter(ImageFilter.GaussianBlur(6))) / 255.0
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
    for age in AGES:
        Image.fromarray(build(age, src, labels, land)).save(
            os.path.join(ROOT, "img/map/then-%d.webp" % age), quality=80, method=6)
    table = {name: {str(age): [round(float(x), 5) for x in rotations(age)[name].flatten()]
                    for age in AGES} for name in ORDER}
    print(json.dumps(table, separators=(",", ":")))


if __name__ == "__main__":
    main()
