#!/usr/bin/env python3
"""Records an animal's English narration into audio/ with Piper.

The lines come from index.html, the card's name and fact and its More lines,
and land where the game looks for them:

    audio/<id>.mp3                 the card: its name, then its fact
    audio/name/<id>.mp3            the name alone, said as the card turns
    audio/more/<id>-found.mp3      how it was found
    audio/more/<id>-1.mp3 .. -3    the three More facts

    python3 tools/tts_en.py utahraptor gastonia   these animals' clips
    python3 tools/tts_en.py --list utahraptor     what would be said, recording nothing

Same voice and pace as every English clip: Piper's en_GB-jenny_dioco-medium
(or PIPER_VOICE_EN, never PIPER_VOICE, which is the Finnish one),
a touch slower than usual, encoded the way tts.py encodes the Finnish.
"""
import argparse
import json
import os
import re
import sys
import tempfile

# its own variable, so a PIPER_VOICE set for the Finnish never reads English
os.environ["PIPER_VOICE"] = os.environ.get("PIPER_VOICE_EN", os.path.expanduser(
    "~/.local/share/piper/voices/en_GB-jenny_dioco-medium.onnx"))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts   # noqa: E402  (reads PIPER_VOICE as it loads)

OUT = os.path.join(tts.ROOT, "audio")
STR = r'"((?:[^"\\]|\\.)*)"'


def unquote(s):
    return json.loads('"%s"' % s)


def clips(html, id_):
    if not re.fullmatch(r"[a-z0-9]+", id_):
        sys.exit("%s: an id is the name in lower case, letters and digits only" % id_)
    card = re.search(r'\{id:"%s",.*?name:%s.*?fact:%s' % (re.escape(id_), STR, STR), html, re.S)
    more = re.search(r'\n    %s: \{found: %s,\s*facts: \[%s,\s*%s,\s*%s\]' % ((re.escape(id_),) + (STR,) * 4), html)
    if not card or not more:
        sys.exit("%s: no card or no More lines in index.html" % id_)
    name = unquote(card.group(1))
    out = [("%s.mp3" % id_, name + ". " + unquote(card.group(2))),
           ("name/%s.mp3" % id_, name),
           ("more/%s-found.mp3" % id_, unquote(more.group(1)))]
    for n in range(3):
        out.append(("more/%s-%d.mp3" % (id_, n + 1), unquote(more.group(n + 2))))
    return [(path, tts.spoken(text)) for path, text in out]


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("ids", nargs="+", help="the animals to record, by their id")
    ap.add_argument("--list", action="store_true", help="print the clips and their text, record nothing")
    args = ap.parse_args()

    html = open(os.path.join(tts.ROOT, "index.html"), encoding="utf-8").read()
    todo = [c for id_ in dict.fromkeys(args.ids) for c in clips(html, id_)]
    if args.list:
        for path, text in todo:
            print("%-28s %s" % (path, text))
        return
    lame = tts.Lame()
    with tempfile.TemporaryDirectory() as tmp:
        jobs = [(text, os.path.join(tmp, "%04d.wav" % i)) for i, (_, text) in enumerate(todo)]
        tts.piper(jobs)
        for (path, _), (_, wav) in zip(todo, jobs):
            dest = os.path.join(OUT, path)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            lame.encode(wav, dest)
            print("  " + os.path.relpath(dest, tts.ROOT))


if __name__ == "__main__":
    main()
