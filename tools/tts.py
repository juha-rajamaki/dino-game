#!/usr/bin/env python3
"""Records the Finnish narration into audio/fi/ with Piper.

Every line comes from lang/fi.js, and every clip lands where the English one
sits under audio/, with the same name, so the game finds it the same way:

    audio/fi/<id>.mp3              the card: its name, then its fact
    audio/fi/name/<id>.mp3         the name alone, said as the card turns
    audio/fi/more/<id>-<key>.mp3   the More lines
    audio/fi/map/<key>.mp3         the stories told on the map
    audio/fi/turn/*.wav            who starts, pair, go again, whose turn
    audio/fi/win/*                 who won, the stars, time's up

The asteroid story is recorded in pieces broken where each survivor is named,
so the moment every name begins is known: it goes into lang/fi.js as
survivorCues, and the animals come up on the map as they are said.

    python3 tools/tts.py                    everything
    python3 tools/tts.py map more/archelon  only paths starting with these
    python3 tools/tts.py --list             what would be recorded, and nothing else

Needs Piper (https://github.com/rhasspy/piper) and the fi_FI-harri-medium
voice. MP3s are encoded with LAME, the same 56 kbps mono as the English clips:
through libmp3lame if it is installed, otherwise ffmpeg.
"""
import argparse
import ctypes
import ctypes.util
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import wave

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FI_JS = os.path.join(ROOT, "lang", "fi.js")
OUT = os.path.join(ROOT, "audio", "fi")
PIPER = os.environ.get("PIPER", shutil.which("piper") or os.path.expanduser("~/bin/piper"))
VOICE = os.environ.get("PIPER_VOICE", os.path.expanduser("~/.local/share/piper/voices/fi_FI-harri-medium.onnx"))
LENGTH_SCALE = float(os.environ.get("PIPER_LENGTH", "1.05"))   # a touch slower, for children
SENTENCE_SILENCE = float(os.environ.get("PIPER_SILENCE", "0.35"))
RATE = 22050

NUMBERS = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", "kuusi", "seitsemän",
           "kahdeksan", "yhdeksän", "kymmenen"]
SAY_NUMBER = {6: "kuusi", 10: "kymmenen", 24: "kaksikymmentäneljä", 30: "kolmekymmentä"}
STARS = {1: "Yksi tähti, hyvä!", 2: "Kaksi tähteä, hienoa!", 3: "Kolme tähteä, huikeaa!"}


def load_fi():
    src = open(FI_JS, encoding="utf-8").read()
    return json.loads(src[src.index("{"):src.rindex("}") + 1]), src


def species_names():
    """The animals' names, as the English page has them: they are not translated."""
    html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    names = {}
    for m in re.finditer(r'\{id:"(\w+)",[^}]*?name:"([^"]+)"', html):
        names[m.group(1)] = m.group(2)
    return names


def spoken(text):
    """The written line made easier to say: no markup, dashes as pauses."""
    text = re.sub(r"<[^>]+>", "", text)
    text = text.replace("”", "").replace("“", "")
    text = re.sub(r"\s*[—–]\s*(?=\D)", ", ", text)   # a dash between words is a breath
    text = re.sub(r"(\d)\s*[–—]\s*(\d)", r"\1–\2", text)
    return text.strip()


def clips(fi):
    names = species_names()
    out = []
    for id_, card in fi["species"].items():
        name = names[id_]
        out.append(("%s.mp3" % id_, name + ". " + card["fact"]))
        out.append(("name/%s.mp3" % id_, name))
    for id_, more in fi["more"].items():
        out.append(("more/%s-found.mp3" % id_, more["found"]))
        for n, line in enumerate(more["facts"]):
            out.append(("more/%s-%d.mp3" % (id_, n + 1), line))
    for key, story in fi["story"].items():
        out.append(("map/%s.mp3" % key, story))
    out += [("turn/start.wav", "Pelaaja yksi aloittaa!"),
            ("turn/pair.wav", "Pari!"),
            ("turn/again.wav", "Saat jatkaa!")]
    for n in range(1, 5):
        out.append(("turn/p%d.wav" % n, "Pelaaja %s" % NUMBERS[n]))
    for n in range(1, 5):
        out.append(("win/p%d%s" % (n, ".mp3" if n < 3 else ".wav"), "Pelaaja %s voitti!" % NUMBERS[n]))
    out += [("win/tie.mp3", "Tasapeli!"),
            ("win/timeup.wav", "Aika loppui! Yritä uudestaan!")]
    for pairs, word in SAY_NUMBER.items():
        for stars, cheer in STARS.items():
            out.append(("win/%d_%d.mp3" % (pairs, stars), "Löysit kaikki %s paria! %s" % (word, cheer)))
    return [(path, spoken(text)) for path, text in out]


def piper(jobs):
    """One Piper run for the lot: a line of JSON per clip in, a WAV per clip out."""
    if not os.path.exists(VOICE):
        sys.exit("No voice at %s.\nGet fi_FI-harri-medium.onnx and .onnx.json from "
                 "https://huggingface.co/rhasspy/piper-voices/tree/main/fi/fi_FI/harri/medium" % VOICE)
    lines = "".join(json.dumps({"text": text, "output_file": wav}, ensure_ascii=False) + "\n" for text, wav in jobs)
    run = subprocess.run([PIPER, "--model", VOICE, "--json-input", "--length_scale", str(LENGTH_SCALE),
                          "--sentence_silence", str(SENTENCE_SILENCE)],
                         input=lines.encode("utf-8"), stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    if run.returncode:
        sys.exit("Piper failed (%d):\n%s" % (run.returncode, run.stderr.decode("utf-8", "replace")[-2000:]))
    for _, wav in jobs:
        if not os.path.exists(wav):
            sys.exit("Piper did not write %s" % wav)


def read_pcm(path):
    with wave.open(path, "rb") as w:
        if w.getnchannels() != 1 or w.getsampwidth() != 2:
            sys.exit("%s: expected 16-bit mono" % path)
        return w.getframerate(), w.readframes(w.getnframes())


def voiced_length(path, floor=500):
    """Seconds until the last sound loud enough to be speech, trailing hush left off."""
    rate, pcm = read_pcm(path)
    samples = memoryview(pcm).cast("h")
    end = len(samples)
    while end > 0 and abs(samples[end - 1]) < floor:
        end -= 1
    return end / float(rate)


class Lame:
    """MP3 through libmp3lame directly, so nothing else needs installing."""

    def __init__(self):
        name = ctypes.util.find_library("mp3lame")
        self.lib = ctypes.CDLL(name) if name else None
        if self.lib:
            self.lib.lame_init.restype = ctypes.c_void_p
            for fn in ("lame_set_in_samplerate", "lame_set_num_channels", "lame_set_brate",
                       "lame_set_mode", "lame_set_quality", "lame_set_out_samplerate"):
                getattr(self.lib, fn).argtypes = [ctypes.c_void_p, ctypes.c_int]
            self.lib.lame_init_params.argtypes = [ctypes.c_void_p]
            self.lib.lame_encode_buffer.argtypes = [ctypes.c_void_p, ctypes.c_void_p, ctypes.c_void_p,
                                                    ctypes.c_int, ctypes.c_void_p, ctypes.c_int]
            self.lib.lame_encode_flush.argtypes = [ctypes.c_void_p, ctypes.c_void_p, ctypes.c_int]
            self.lib.lame_close.argtypes = [ctypes.c_void_p]

    def encode(self, wav, mp3):
        rate, pcm = read_pcm(wav)
        if not self.lib:
            ffmpeg = shutil.which("ffmpeg")
            if not ffmpeg:
                sys.exit("Need libmp3lame or ffmpeg to make MP3s (sudo apt install ffmpeg).")
            subprocess.run([ffmpeg, "-loglevel", "error", "-y", "-i", wav, "-ac", "1", "-ar", str(RATE),
                            "-b:a", "56k", mp3], check=True)
            return
        lame = self.lib.lame_init()
        if not lame:
            sys.exit("lame_init failed")
        try:
            self.lib.lame_set_in_samplerate(lame, rate)
            self.lib.lame_set_out_samplerate(lame, RATE)
            self.lib.lame_set_num_channels(lame, 1)
            self.lib.lame_set_mode(lame, 3)   # MONO
            self.lib.lame_set_brate(lame, 56)
            self.lib.lame_set_quality(lame, 2)
            if self.lib.lame_init_params(lame) < 0:
                sys.exit("lame_init_params failed")
            n = len(pcm) // 2
            size = int(1.25 * n + 7200)
            buf = ctypes.create_string_buffer(size)
            src = ctypes.create_string_buffer(pcm, len(pcm))
            got = self.lib.lame_encode_buffer(lame, src, src, n, buf, size)
            if got < 0:
                sys.exit("lame_encode_buffer failed (%d) on %s" % (got, wav))
            tail = ctypes.create_string_buffer(7200)
            more = self.lib.lame_encode_flush(lame, tail, 7200)
            with open(mp3, "wb") as f:
                f.write(buf.raw[:got])
                f.write(tail.raw[:max(0, more)])
        finally:
            self.lib.lame_close(lame)


GAP = 0.3   # the breath between the survivors as they are named, in seconds


def record_asteroid(fi, tmp):
    """The asteroid story, recorded in pieces that break where each survivor is
    named and joined with a short breath between them, so the moment every
    name begins is known exactly. Returns the WAV and those moments."""
    story = spoken(fi["story"]["asteroid"])
    marks = []
    for sv, word in fi["survivorWords"].items():
        at = story.find(spoken(word))
        if at < 0:
            sys.exit("survivorWords.%s (%r) is not in the asteroid story" % (sv, word))
        marks.append((at, sv))
    marks.sort()
    cuts = [0] + [at for at, _ in marks] + [len(story)]
    # piece i is the story from cut i, and names survivor i - 1 as it begins
    pieces = [(story[a:b].strip(), marks[i - 1][1] if i else None) for i, (a, b) in enumerate(zip(cuts, cuts[1:]))]
    pieces = [(text, sv, os.path.join(tmp, "asteroid-%d.wav" % i)) for i, (text, sv) in enumerate(pieces)]
    piper([(text, wav) for text, _, wav in pieces if text])
    out, cues, t, rate = bytearray(), {}, 0.0, RATE
    for text, sv, wav in pieces:
        if sv:
            cues[sv] = round(t + 0.05, 2)
        if not text:
            continue
        if out:
            out += b"\0\0" * int(GAP * rate)
            t += GAP
            if sv:
                cues[sv] = round(t + 0.05, 2)
        rate, pcm = read_pcm(wav)
        keep = int(voiced_length(wav) * rate) * 2   # each piece without its trailing hush
        out += pcm[:keep]
        t += keep / 2.0 / rate
    whole = os.path.join(tmp, "asteroid.wav")
    with wave.open(whole, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(rate)
        w.writeframes(bytes(out))
    return whole, cues


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("only", nargs="*", help="record only the clips whose path starts with one of these")
    ap.add_argument("--list", action="store_true", help="print the clips and their text, record nothing")
    args = ap.parse_args()

    fi, src = load_fi()
    todo = [c for c in clips(fi) if not args.only or any(c[0].startswith(p) for p in args.only)]
    if args.list:
        for path, text in todo:
            print("%-28s %s" % (path, text))
        return
    if not todo:
        sys.exit("Nothing matches %s" % " ".join(args.only))

    lame = Lame()
    with tempfile.TemporaryDirectory() as tmp:
        asteroid = any(p == "map/asteroid.mp3" for p, _ in todo)
        todo = [c for c in todo if c[0] != "map/asteroid.mp3"]
        jobs = [(text, os.path.join(tmp, "%04d.wav" % i)) for i, (_, text) in enumerate(todo)]
        print("Recording %d clips..." % (len(jobs) + asteroid))
        if jobs:
            piper(jobs)
        if asteroid:
            wav, cues = record_asteroid(fi, tmp)
            todo.append(("map/asteroid.mp3", ""))
            jobs.append(("", wav))
        for (path, _), (_, wav) in zip(todo, jobs):
            dest = os.path.join(OUT, path)
            os.makedirs(os.path.dirname(dest), exist_ok=True)
            if dest.endswith(".wav"):
                shutil.copyfile(wav, dest)
            else:
                lame.encode(wav, dest)
            print("  " + os.path.relpath(dest, ROOT))

        # a new version, so browsers fetch the new clips and lang/fi.js with them
        fi["version"] = fi.get("version", 0) + 1
        if asteroid:
            fi["survivorCues"] = cues
            print("Survivor cues: %s" % cues)
        head = src[:src.index("{")]
        with open(FI_JS, "w", encoding="utf-8") as f:
            f.write(head + json.dumps(fi, ensure_ascii=False, indent=1) + ";\n")
        index = os.path.join(ROOT, "index.html")
        html = open(index, encoding="utf-8").read()
        html, n = re.subn(r'src="lang/fi\.js(\?v=\d+)?"', 'src="lang/fi.js?v=%d"' % fi["version"], html)
        if n != 1:
            sys.exit("index.html: expected one <script src=\"lang/fi.js\">, found %d" % n)
        with open(index, "w", encoding="utf-8") as f:
            f.write(html)
        print("lang/fi.js is now version %d" % fi["version"])


if __name__ == "__main__":
    main()
