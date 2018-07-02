# Basic Needs/Stats

The basic needs combine to calculate the PC's wellness score.

## Individual Needs:

* Hunger
* Fun
* Social

## Wellness Check

Before a code block can be attempted, the game checks the PC's hunger, social, and fun scores. If the combined value is less than 90, the code block cannot be attempted.

## Mechanics:

* The three stat needs are constantly decaying at varying rates
  * Stretch goal: the rate of decay could be randomly varied (except for sleep) in order to simulate people who, for example, don't need much socialization vs. those who need a ton of it. The user could make these selections (or some of them anyway) in choices on a setup screen.
* The PC's hunger, social, and fun values can be changed by attending parties and meetups or by eating food. Each [Event](./Events.md) will have a different set of status effects on the PC's stats.
* The need for sleep cannot be mitigated. It is also the limiting factor to how much time the PC has during the day for completing Code Blocks or meeting other needs.