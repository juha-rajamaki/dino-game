#!/usr/bin/env python3
"""Turns a painted animal into the game's two pictures.

The painting should be a PNG with the animal cut out on a transparent
background, about 1536 x 1024. It becomes

    img/full/<id>.webp   the painting as it is, opened over the whole screen
    img/<id>.webp        the card plate: 620 x 465, the animal fitted into the
                         middle 440 x 295, the way every other card is framed

    python3 tools/picture.py ~/Desktop/dino/utahraptor.png utahraptor

Needs Pillow.
"""
import os
import re
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARD, FIT = (620, 465), (440, 295)


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, id_ = sys.argv[1], sys.argv[2]
    if not re.fullmatch(r"[a-z0-9]+", id_):
        sys.exit("%s: an id is the name in lower case, letters and digits only" % id_)
    im = Image.open(src).convert("RGBA")
    lo, _ = im.getchannel("A").getextrema()
    if lo > 0:
        sys.exit("%s has no transparent background: cut the animal out first" % src)

    # the animal alone, leaving out any faint glow round the edges
    box = im.getchannel("A").point(lambda v: 255 if v > 100 else 0).getbbox()
    if not box:
        sys.exit("%s is all but see-through: no animal to frame" % src)
    animal = im.crop(box)
    s = min(FIT[0] / animal.width, FIT[1] / animal.height)
    animal = animal.resize((round(animal.width * s), round(animal.height * s)), Image.LANCZOS)
    card = Image.new("RGBA", CARD, (0, 0, 0, 0))
    card.alpha_composite(animal, ((CARD[0] - animal.width) // 2, (CARD[1] - animal.height) // 2))
    card.save(os.path.join(ROOT, "img", id_ + ".webp"), "WEBP", quality=80, method=6)
    im.save(os.path.join(ROOT, "img", "full", id_ + ".webp"), "WEBP", quality=80, method=6)
    for p in ("img/%s.webp" % id_, "img/full/%s.webp" % id_):
        print("  %s  %d KB" % (p, os.path.getsize(os.path.join(ROOT, p)) // 1024))


if __name__ == "__main__":
    main()
