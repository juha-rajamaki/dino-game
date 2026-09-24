# Dinomemory

A dinosaur memory game for children. Turn over two cards; if they match you keep
the pair, and the animal you found opens on the left with its picture, its stats
and something worth knowing about it. A play button reads the card aloud, so it
works for a child who cannot read yet.

**Play it: https://juha-rajamaki.github.io/dino-game/**

## What is in it

- **30 animals** — 24 dinosaurs, 4 pterosaurs, 1 marine reptile and 1
  plesiosaur. The six that are not dinosaurs say so on their card, because
  Pteranodon, Mosasaurus and Elasmosaurus are mistaken for dinosaurs more often
  than almost anything else in this set.
- **A start screen** where the size and the number of players are chosen. It is
  also what wakes the forest: a browser will not play audio until the player has
  done something, so the one tap that starts the game starts the sound with it.
  **New game** brings the screen back.
- **Four sizes** — Easy (6 pairs), Medium (10), Hard (24) and Extra hard (all
  30). The animals in a game are drawn at random each time, so the same size
  plays differently. One player on Hard gets a 6:00 countdown, and a
  *time's up* if it runs out. Extra hard is always against the clock — even for one
  player, who gets 6:00 to find all thirty and a *time's up* if they do not.
  With more players each clock is shorter, since everyone sees everyone's
  cards, but the table gets a minute more for each player: 7:00 shared
  as 3:30 each for two, 8:00 as 2:40 each for three and 9:00 as 2:15
  each for four.
  And the cards will not sit still: once a quarter of the pairs are found,
  every half-minute a warning sounds and two face-down cards glide across
  the table and trade places — every ten seconds once half are found,
  and two pairs at a time with only a quarter left — so what you
  remembered about them is no longer true. The first card turned starts the
  clock, and a bell rings when half of a player's time is gone.
- **One to four players.** A miss always passes the turn, and the next player is
  named out loud — the plate only lights up for them once the naming has
  finished, so nobody plays a card into somebody else's turn. What a *pair* does is the players' own choice,
  made on the start screen: **Hand over** passes the turn along, which is how it
  starts, or **Go again** lets the finder keep it. Everyone gets a colour —
  player one blue, two red, three green, four yellow — and every pair won is
  framed in its finder's colour.
- **A clock each, if you want one.** Two or more players can turn a countdown on from
  the start screen; it is off to begin with, and the timer then counts up as it
  always has. With it on, each player has a budget of their own: fifteen seconds a pair, never less than a
  minute and a half, so 1:30 on Easy, 2:30 on Medium and 6:00 on Hard — and
  6:00 to 2:15 on Extra hard, by how many play, where there is no choosing: the clock is always on. It runs
  only while the turn is yours, stops while the two cards of a miss are still
  face up — that time belongs to nobody — goes red for the last thirty
  seconds, and ticks out loud through the last ten. Run it out and the game ends there and you cannot win it, however far
  ahead you were.
- **The whole screen.** Tap the picture in *What you found* and the animal
  fills the screen, at full size, over the dimmed forest, with its own play
  button for the narration. A tap anywhere, ✕ or Esc puts it away. The clock
  does not stop for it.
- **Narration.** Every card has a spoken version of its text, recorded with
  [Piper](https://github.com/rhasspy/piper) using the `en_GB-jenny_dioco-medium` voice.
  So is everything said between turns: who starts, *pair*, whose turn it
  is now, *go again* when a pair lets the finder keep the turn, and who has won. If a clip
  is ever missing the page falls back to the browser's own speech.
- **Jungle ambience.** A looping bed of birds and insects behind the game, with
  its own on/off switch in the top bar that is remembered between visits. It
  ducks out of the way while a card is being read aloud.
- **A card pile.** Every pair you find drops a round badge into the pile at the
  top of your own place at the table — players one and three down the left side,
  two and four down the right — and any card can be opened again from there at
  any time. Each side has one **What you found** box sitting between its two
  piles, shared by
  the two players sitting there and wearing the colour of whoever's card is in
  it. The two sides are independent: opening a card on the left never shuts, or
  silences, the one on the right. A phone has one side of the table, so there
  everything stacks into the single sheet.
- **All cards** — browse the whole collection without playing.
- **The animals stand back.** The Tyrannosaurus and the velociraptors have the
  board to themselves while the start screen is up. As the game opens — once the
  first player has been named — the cards come up in front of them in a ripple
  spreading out from the middle of the table, so nothing stands between a child
  and the game. When it is over the animals run back in over the cards, the
  Tyrannosaurus from off the left edge and the velociraptors from off the right.
- **The end can be put away.** The banner that says who won has an **×** on it.
  Closing it leaves the finished board, everybody's piles and the cards still
  there to look over; **New game** starts another whenever you are ready.
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
img/            30 card plates plus the background and the two foreground animals
img/full/       the same 30 animals at full size, fetched only when one is opened
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
