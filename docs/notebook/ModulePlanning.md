# Module and Function Planning

List out all of the modules and actors that will go into this game in development order.

For actors: list the name of the object and its properties and methods.
For modules: list the functions, and list each function's inputs and outputs. Make general notes and provide links to effects on other modules as necessary.

## Sections That Still Definitely Need Definition

* Need Object
  * Needs definition around how workPointsValue will work. Currently, I have that this value is the smallest number of WorkPoints an object is worth, with the thought that external factors might increase the number awarded. Not sure if I want to have that information coded in the individual event or if it should run as a buff on the PC after the initial value is given.
  * Needs more definition around the confidenceChangeValue. I'm still not 100% sure how that process will work. Are there any objects that would change confidence or will confidence change only from events? Could events be considered need objects?

## Requirements/Universals

* You cannot ever lose Work Points
* No object or event can give you energy: you can't make more time
* All change calculations should be addition. We are either adding positive numbers or negative numbers to existing statuses, but there are never any minuses.

## Actors (Object.create)

### PlayerCharacter

#### Requirements & Notes:

* Only one per game

#### Data Definitions:

* gameID
  * PK, gameDifficulty.gameID
* name
* workPoints
  * Numeric
* confidence
  * Numeric
* energy
  * Numeric
  * Energy is viewed as a measurement of time so it does not decay constantly, but decays as the PC engages in events and Code Blocks.
* hunger
  * Numeric
* social
  * Numeric
* fun
  * Numeric
* (fn) wellness
  * Calculated value combining the values of hunger, social, and fun to determine whether PC is able/willing to perform a given task
  * Inputs:
    * PlayerCharacter.hunger
    * PlayerCharacter.social
    * PlayerCharacter.fun
  * Output:
    * Perform calculation "Y" to get a number, then evaluate that number to "true" or "false" and return the boolean to determine whether the requested action can take place.
  * Note: in addition to the wellness check, the PC needs to have the required amount of energy to attempt the task.
* (fn) change(property, point value)
  * Changes the designated property by  "X" points.
    * To deduct points, add a negative value
    * Note: work points should never be decreased and energy should never be increased.

### NeedObject

#### Requirements & Notes:

* May represent an object like a hamburger or an [event](./Events.md) like game night. Any non-character thing that will have an effect on the PC's needs, confidence, or work points.

#### Data Definitions:

* needObjectID
* name
* energyChangeValue
  * Can only be negative: you can't buy more time
  * The amount of energy/time this object consumes
* workPointsValue
  * Can only be positive: you can't lose learning
  * The smallest number of work points this object grants
* confidenceChangeValue
  * Can be positive or negative
  * The amount of effect this object has on the PC's confidence
* hungerChangeValue
  * Can be positive or negative
  * The amount of effect this object has on the PC's hunger
* socialChangeValue
  * Can be positive or negative
  * The amount of effect this object has on the PC's social
* funChangeValue
  * Can be positive or negative
  * The amount of effect this object has on the PC's fun

### Non-Player Character

#### Requirements & Notes:

* Game will have one each of Steve, Jisie, and Kimmy, along with "X" number of students available for group work or socializing.

#### Data Definitions:

* name
* isInstructor
  * boolean
* thumbsUpValue
  * Numeric
  * represents the points passed to the buff function on the player character

### Game Difficulty Object

#### Requirements & Notes:

* Stores the rate of decay for all needs.
* Methods handle the decay rate calculations
* Only one per game

#### Data Definitions:

* gameID
  * FK, linked to playerCharacter.gameID
* confidenceDecayRate
* hungerDecayRate
* funDecayRate
* socialDecayRate


//move these things to the tick object
* (fn) decayConfidence
  * Inputs: PC.confidence, this.confidenceDecayRate
  * Work: evaluate whether confidence needs to be gained or lost (to balance at 0).
  * Output: Return the positive or negative number that confidence needs to be adjusted by.
* (fn) decayHunger
  * Inputs: PC.hunger, this.hungerDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of hunger points the PC loses per tick
* (fn) decayFun
  * Inputs: PC.fun, this.funDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of fun points the PC loses per tick
* (fn) decaySocial
  * Inputs: PC.social, this.socialDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of social points the PC loses per tick

### Code Block Objects

#### Requirements & Notes:

* Many of these
* On launch of game, the versions will only be displayed. There will be no minigame component.
* When the player initiates a Code Block, it will be chosen randomly from the difficulty range based on the day of class. It can be JS, CSS, or HTML.

#### Data Definitions:

* blockID
  * Numeric, auto
* blockDifficulty
  * Numeric, used to filter the code blocks by day
* correctVersion
  * The correct code snippet. It should be completely self-contained and understandable as it is.
* delusionalVersion
  * A version of the code snippet with mistakes in it.
* timidVersion
  * A version of the code snippet with words or elements missing.