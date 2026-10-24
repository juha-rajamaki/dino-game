#!/usr/bin/env python3
"""Reads img/map/then-66.webp into the small map of what was on the ground
66 million years ago - sea, forest, desert or ice - that index.html keeps as
GROUND66, so the asteroid's fires know where they can burn even when the
browser will not let the page read the picture itself (a file opened from
disk). Same colour rules as readGround66 in index.html.

    python3 tools/ground66.py        prints the line to paste over GROUND66

Run it again whenever tools/paleomap.py draws the worlds again. Needs Pillow.
"""
import base64
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H = 256, 128
KINDS = {"sea": 0, "forest": 1, "desert": 2, "ice": 3}


def kind(r, g, b):
    if b > r + 25 and b >= g:
        return "sea"
    if r > 175 and g > 175 and b > 175:
        return "ice"
    return "forest" if g >= r - 4 else "desert"


def main():
    im = Image.open(os.path.join(ROOT, "img/map/then-66.webp")).convert("RGB").resize((W, H), Image.BILINEAR)
    px = im.load()
    cells = [KINDS[kind(*px[x, y])] for y in range(H) for x in range(W)]
    packed = bytearray()
    for i in range(0, len(cells), 4):   # four cells to a byte, two bits each
        a, b, c, d = cells[i:i + 4]
        packed.append(a | b << 2 | c << 4 | d << 6)
    print('  var GROUND66 = "%s";' % base64.b64encode(bytes(packed)).decode())


if __name__ == "__main__":
    main()
