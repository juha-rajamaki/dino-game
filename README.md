# Dinomemory

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
- **Jungle ambience.** A looping bed of birds and insects behind the game, with
  its own on/off switch in the top bar that is remembered between visits. It
  ducks out of the way while a card is being read aloud.
- **A card pile.** Every pair you find drops a card into the pile, and any card
  can be opened again from there at any time.
- **All cards** — browse the whole collection without playing.
- **Timer and score.** The clock starts on the first card and stops on the last
  pair. The score rewards guessing well and being quick, and gives one to three
  stars scaled to how many pairs were in play.

On a phone the control row folds behind a single **Menu** button, the found card
slides up as a sheet over the board instead of sitting beneath it, and the board
is sized to fit the screen so every card is visible without scrolling.

## Running it

It is a single static page with no build step and no dependencies:

```
index.html      the whole game - markup, styles and logic
img/            24 card plates plus the background and the two foreground animals
audio/          24 narration clips, one per animal, plus the jungle loop
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

The jungle ambience is *forest ambience* by nille, public domain, via Wikimedia
Commons. It is cut into a 1:40 seamless loop by crossfading its tail into its
head, so the restart cannot be heard, then lightly compressed so the quiet parts
still carry under the game.
