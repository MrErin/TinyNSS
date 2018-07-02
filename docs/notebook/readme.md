# TinyNSS

## Future Features

* Allow player to adjust difficulty of game (probably accomplished by changing the sweet spot range of [confidence](./Confidence.md) or the rate of decay on Game Difficulty object
* Allowing player to adjust character to play as an introvert or as a no-nonsense coder, which would change the rate of decay for the [basic needs](./BasicNeeds.md) and/or change the amount a given action will top off the need. For example: to an introvert, one party would be plenty to fill up a social bar, but for an extrovert, they will likely want to attend every social gathering.
* Fully program the tutorial level (with pop up messages and auto pausing)
* Convert the game to a React app

## Refactor Opportunities

* dbSave/dbLoad: I wrote those and have used them up to this point with the exclusive plan of saving and loading only the game database. Now as I'm developing the code block minigame I have created near-duplicate functions in order to save and load the code block list every day (rather than saving and loading the database itself another time every day.)
* calculating confidence: there are very similar switch statements in the two files below. Perhaps they can be refactored into one function each one calls
  * codeBlocks/buildStartCodeBlockButton
  * DOM/updateBar
* button factory and component factory can be combined
* in the code block minigame, I've used a function three different times to pass around a code block. I should modularize it but don't want to stop and rewrite things right now.
* in Days/newDay I have to advance the day before doing anything else to avoid DB save conflicts. There should be a better way to do that.

## Contents

[Asking For Help](./AskingForHelp.md)
[Player Stats/Needs](./BasicNeeds.md)
[Code Block Minigame](./CodeBlockMinigame.md)
[Coder Points](./CoderPoints.md)
[Confidence](./Confidence.md)
[Database Definitions](./DatabaseDefinitions.md)
[Days](./Days.md)
[Events](./Events.md)
[Time](./Time.md)
[Winning](./Winning.md)