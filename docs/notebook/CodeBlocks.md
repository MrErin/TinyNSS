# Code Blocks

In the first version of the game, Code Blocks will just be another activity that the player will attempt to complete but will not have to do anything to complete, like eating. It will be displayed as a status bar that automatically fills.

See the [Code Block Minigame](./CodeBlockMinigame) for details on the minigame stretch goal.

## Attempting

* To attempt a Code Block, the PC needs "X" amount of energy and also needs to pass a [wellness check](./BasicNeeds.md).
* Success:
  * Code Block status bar will fill and the energy cost will be deducted from the PC's energy property. Work Points will be added to the PC. Needs will decay normally.
* Failure:
  * If PC has enough energy but fails the wellness check, the PC says, "I can't even right now." and takes a small debuff on confidence.
  * If PC doesn't have enough energy, Code Block status bar will start, but before the bar is filled, the PC says "ZZZZZZZ" and day ends.