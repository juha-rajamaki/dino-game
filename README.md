# Mesozoic Match

A dinosaur memory game for children. Turn over two cards; if they match you keep
the pair, and the animal you found opens on the left with its picture, its stats
and something worth knowing about it. A play button reads the card aloud, so it
works for a child who cannot read yet.

**Play it: https://juha-rajamaki.github.io/dino-game/**

## What is in it

- **24 animals** — 21 dinosaurs, 4 pterosaurs and 1 marine reptile. The three
  that are not dinosaurs say so on their card, because Pteranodon and Mosasaurus
  are mistaken for dinosaurs more often than almost anything else in this set.
- **Three sizes** — Easy (6 pairs), Medium (10) and Hard (all 24). The animals
  in a game are drawn at random each time, so the same size plays differently.
- **One or two players.** In two-player mode a match keeps your turn and a miss
  passes it.
- **Narration.** Every card has a spoken version of its text, recorded with
  [Piper](https://github.com/rhasspy/piper) using the `en_GB-jenny_dioco-medium` voice.
  If a clip is ever missing the page falls back to the browser's own speech.
- **A card pile.** Every pair you find drops a card into the pile, and any card
  can be opened again from there at any time.
- **All cards** — browse the whole collection without playing.
- **Timer and score.** The clock starts on the first card and stops on the last
  pair. The score rewards guessing well and being quick, and gives one to three
  stars scaled to how many pairs were in play.

## Running it

It is a single static page with no build step and no dependencies:

```
index.html      the whole game - markup, styles and logic
img/            24 card plates plus the background and the two foreground animals
audio/          24 narration clips, one per animal
```

Open `index.html` in a browser, or serve the folder with anything:

```sh
python3 -m http.server 8000
```

## Notes

Card art, the jungle background and the two foreground animals are the author's
own images. Speeds and weights are scientists' best estimates — bones cannot be
made to run — but they are the right order of magnitude, from Stegosaurus at
7 km/h to Gallimimus at 60.
