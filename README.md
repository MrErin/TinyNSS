# Front-End Capstone

My front-end capstone is an HTML/Javascript game that simulates the experience of being an NSS student using an interface inspired by Tamagotchi virtual pets. The player must care for their student and keep their student in optimal health so that the student can learn to code.

See the [notebook](./docs/notebook/readme.md) for detailed design decisions.

## Currently Working On:

Events sprint

## Current Problem:

## Sprint List (newest at top):

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