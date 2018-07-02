# Code Blocks Minigame

Attempting code blocks is the primary means the PC earns coder points. 

## Code Block Selection

The game is populated with ~50 possible code blocks, assigned to the days of the game in order of increasing difficulty. At the start of each game day, the game assembles a list of code blocks that meet the following criteria:

* All code blocks from the current game day (today)
* All code blocks from the previous game day (yesterday)
* One code block randomly chosen from the next game day (tomorrow)

This list of code blocks is randomized. Each time the player attempts a code block, the last block in the randomized list is used to start the minigame.

## Basic Minigame

If the PC has optimal confidence and attempts a code block, a modal form will open that displays a block of code and has a text area into which the player must type that block of code. As the player types, the game checks each character to ensure the correct one was typed. In optimal confidence, the player will win points simply for typing the code block exactly as it appears. Copy and paste are disabled.

## Complications

In addition to the correct version of the code block, the player may see a different version of a given code block based on the PC's [confidence](./Confidence.md). These are the possible variations of a given code block:

1. Correct:
  a. the version of the block that will display when PC is in the sweet spot.
1. Delusional:
  a. the displayed Code Block will have mistakes in it, but only the Correct version will be accepted.
1. Timid:
  a. the displayed Code Block will have blank spots, but only the Correct version will be accepted.

## Mechanics

* No copy/paste
* [Asking for help](./AskingForHelp.md)
  * This is a button enabled if the PC's confidence is non-optimal.
  * Asking for help carries no point penalty
* Abandon Code Block (by closing the modal)
  * Always an option
  * Does not refund the energy expended to start the Code Block
* Time limit:
  * There is no timeout. The player may take as long as s/he needs to type the Code Block.
* Code Blocks require "X" amount of energy to attempt.
  * If the PC does not have enough energy, it responds, "No...I can't even."