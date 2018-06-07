# Code Blocks Minigame

The Code Blocks minigame is a stretch goal for this project as it is very complicated and I want to make sure I get the game on its feet before I focus on hanging bells on it.

## Examples:

Code Blocks get more complicated as the days progress, but the user is still only typing the exact same characters given.

* Declaring
  * Array
  * Object
  * Variables let/const
  * Functions
* Defining
  * Loops
    * For
    * For each
    * For in

## Complications

Each code block will have three variations:

1. Correct:
  a. the version of the block that will display when PC [confidence](./Confidence.md) is in the sweet spot.
  a. This is also the only version that the game will recognize as correct and award points for.
1. Delusional:
  a. the displayed Code Block will have mistakes in it, but only the Correct version will be accepted from the player and awarded points.
1. Timid:
  a. the displayed Code Block will be missing pieces, but only the Correct version will be accepted from the player and awarded points.

## Point Values

* Minimal Points: "X"
* Regular Points: "X"
* Advanced Points: "X"

## Mechanics

* No copy/paste
* Asking for help
  * This is an option on every Code Block screen.
  * Asking for help carries no point penalty
* Abandon Code Block
  * Always an option
  * Does not refund the energy expended to start the Code Block
  * Has a small downward effect on Confidence
* Time limit:
  * There is no timeout. The player may take as long as s/he needs to type the Code Block.
  * Completing the Code Block in a shorter period of time will give more points towards final score.
* Code Blocks require "X" amount of energy to attempt.
  * If the PC does not have enough energy, it responds, "No...I can't even."
* Confidence-Based Complications:
  * If PC confidence is too high, the Code Block will show the "Delusional" complication.
    * If the player copies this code directly, they will be awarded minimal points and informed they made a mistake.
      * Confidence will decrease somewhat, but may still be in the danger zone, and might plummet.
    * If the player fixes the code, full credit is awarded, but confidence will increase.
      * Only the "Correct" version of the Code Block will be accepted.
      * The player will be informed that they achieved perfection and asked whether they're actually learning anything at this point or if they need to push boundaries/get out of the comfort zone.
    * If the player asks for help, the correct version of the Code Block will appear and confidence will move towards stability.
  * If PC confience is too low, the Code Block will show the "Timid" complication.
    * If the player copies this code directly, Steve or one of the instructors will come over and offer help boosting confidence.
    * If the player fixes the code, Advanced points are awarded and confidence buffs towards stability
      * Note: only the "correct" version of the code will be accepted as an answer.
    * If the player asks for help, they will receive direct attention from an instructor, awarding a confidence boost as well as revealing the "correct" answer.