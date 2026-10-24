---
name: add-dinosaur
description: Research an animal and add it to Dinomemory - card, More facts, map pin, Finnish, narration and pictures. Use when the user asks to add a dinosaur, pterosaur or sea reptile to the game, asks whether one is in the game, or hands over a picture of a new one.
---

# Adding an animal to Dinomemory

The game is for children, so every line must be true, short and easy to say
aloud. Research first, write second. The owner paints the pictures; you do
everything else.

## 0. Is it already in?

```sh
git grep -il "<name>"            # also try the family: git grep -ioh "[a-z]*raptor" | sort -u
```

If not, the id is the name in lower case (`utahraptor`).

## 1. Research

Read at least two good sources and note where they disagree. Start with the
English Wikipedia article (read with WebFetch and ask for exact facts), then
check the details with a museum, a geological survey, the paper that named it
or a reliable news report. Collect:

- **Name**: what it means, who named it and when, who the second (species)
  name honours.
- **The find**: who found the first bones, when, where (the quarry or the
  formation), and anything later and notable.
- **Age**: millions of years ago, from the newest dating you can find.
- **Size and weight**: a range of estimates; pick a cautious middle one.
- **Food**, **place** (a country or continent as the other cards write it).
- **What it was like there then**: the habitat of the rock it came from.
- **Map site**: latitude and longitude of the find, as close as sources allow.
- **Three things a child would remember**: fossils with stories (a last meal,
  a herd in one place, a famous mistake), records, links to animals already
  in the game.

Rules for the text:
- Where scientists still argue, say so: "may have", "scientists think",
  "X thought...". Never state a guess as fact.
- Compare sizes with things a child knows (a car, a bus, a hippo, a piano).
- Leave out private people's names, children's especially; scientists and
  finders already in the published record are fine.
- Keep each line to two or three short sentences, like the cards beside it.

Tell the user which sources you used and where they disagreed.

## 2. index.html - four tables

Add the new animal at the end of each table, copying the shape of the entry
before it (look at the last animal added for a fresh example):

1. **The cards**, the array ending just before `/* More about each animal`:
   `{id, speed, tonnes, name, means, period, ago, size, weight, food, place, fact}`.
   `speed` (km/h) and `tonnes` fill the Speed and Weight meters on the card,
   so `tonnes` must agree with the `weight` text (0.3 for 300 kg). Speeds are
   rough guesses in line with the others: 7-10 armoured, 20-25 big walkers,
   35-40 quick hunters. Animals that are not dinosaurs also carry `group`
   (`"Pterosaur"`, `"Marine reptile"`, `"Plesiosaur"`, `"Pliosaur"`), which
   puts "not a dinosaur" on the card. Use `“...”` around `means`
   and `–`/`—` for dashes, as the others do.
2. **More**, the table after it: `id: {found: "...", facts: ["...", "...", "..."]}`
   - exactly three facts.
3. **SITES** (`var SITES`): `id: [["Place, Region", lat, lon, "plate"]]`. The
   plate is the piece of crust the place rides on as the continents drift:
   `na`, `sa`, `eu` (Europe and most of Asia), `af`, `au` or `an`; copy a
   neighbour's. Several animals may share one site and coordinates; the map
   spreads their pins apart.
4. **THEN** (`var THEN`): one short phrase of what the place was like.

Mind the comma after the entry that used to be last.

## 3. lang/fi.js - the Finnish

Add the same animal to `species` (means, ago, size, weight, place, fact),
`more` (found, facts) and `then`, in natural Finnish rather than word for word;
read a neighbouring entry for the style. If the map site is new, add it to
`places` too (a site may stay in English, as most do). The species names
themselves are never translated. Check it loads:

```sh
node -e 'global.window={};require("./lang/fi.js");const f=window.DINO_FI;console.log(Object.keys(f.species).length,Object.keys(f.more).length)'
```

## 4. Check the page

```sh
python3 -c "import re;h=open('index.html',encoding='utf-8').read();[open('/tmp/s%d.js'%i,'w').write(m) for i,m in enumerate(re.findall(r'<script>(.*?)</script>',h,re.S))]"
for f in /tmp/s*.js; do node --check $f; done
```

(use the session's scratchpad instead of /tmp when there is one)

## 5. Narration

```sh
python3 tools/tts_en.py <id>                                  # English: card, name, More
python3 tools/tts.py <id> name/<id> more/<id>                 # Finnish, the same six clips
```

`tts.py` also bumps `lang/fi.js`'s version and the `?v=` on its script tag,
so browsers fetch the new Finnish. Use `--list` on either to see what will be
said first. Piper never says a line the same way twice, so record only the
clips that changed.

## 6. Pictures

The owner paints them and hands over a PNG with the animal cut out on a
transparent background. Then

```sh
python3 tools/picture.py <path/to/painting.png> <id>
```

writes `img/<id>.webp` (the card) and `img/full/<id>.webp`. Look at the card
on a dark background before you say it is done. If an existing picture is
replaced, add the id to `PIC_VERSION` in index.html (or raise its number) so
browsers fetch it again.

## 7. README

Raise the counts in "What is in it" (animals, and dinosaurs or pterosaurs or
sea reptiles) and in the `img/` lines of "Running it", and mention the new
animal in the list where it fits.

## 8. Finish

- Run the code-security-auditor agent over the diff (the owner asks for this
  after every new feature).
- Do not open the game in the browser unless asked.
- Commit when the owner says so, in the repo's style: a subject line that
  says what the player now sees, a short paragraph of what and why.
