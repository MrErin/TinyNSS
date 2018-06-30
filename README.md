# Front-End Capstone: TinyNSS

TinyNSS is an HTML/Javascript game that simulates the experience of being an NSS student using an interface inspired by Tamagotchi virtual pets. The player must care for their student and keep their student in optimal health so that the student can learn to code.

See the [notebook](./docs/notebook/readme.md) for detailed design decisions.

## Currently Working On:

End to end testing and documentation

## Current Problem:

## Future Refactor Opportunities:

* dbSave/dbLoad: I wrote those and have used them up to this point with the exclusive plan of saving and loading only the game database. Now as I'm developing the code block minigame I have created near-duplicate functions in order to save and load the code block list every day (rather than saving and loading the database itself another time every day.)
* calculating confidence: there are very similar switch statements in the two files below. Perhaps they can be refactored into one function each one calls
  * codeBlocks/buildStartCodeBlockButton
  * DOM/updateBar
* button factory and component factory can be combined
* in the code block minigame, I've used a function three different times to pass around a code block. I should modularize it but don't want to stop and rewrite things right now.
* in Days/newDay I have to advance the day before doing anything else to avoid DB save conflicts. There should be a better way to do that.

## Sprint List (newest at top):

_**Sprint: Code Blocks**_

* Code blocks
* Wellness Check
* Each school day has a particular "mission" that code blocks are contributing towards (like "Today is Group Project Day)
* Asking for help
* Recheck cards from previous sprints to make sure nothing broke or needs adjusting
* Documentation

_**Sprint: Days**_
* Implement game days
* Game Over: Stats failure
* Day Over: Energy failure
* Counting Days (end of game)
* Documentation

_**Sprint: Events**_
* Implement decay of all PC stats
* Events affect PC's stats
* Energy Check
* Create Events data (meetups and parties)
* Documentation

_**Sprint: HUD**_
* Messages
* Hunger
* Social
* Fun
* Work Points
* Confidence
* Documentation

_**Sprint: Core**_
* Create Game Object, Player character object, and events array
  * Have a "new game" button that kicks off a new game (i.e., recreates the objects)
* Create Time/Ticks
* PC's hunger stat decays according to a rate set in the Game and measured by the ticks