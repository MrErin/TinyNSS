# Project X

The wiki contains detailed notes on the design process and gameplay decisions. The [README](../../README.md): contains the working TODOs/requirements for the project and, once deployed, will have the instructions for play.

Practice modular design with the wiki. Keep detailed requirements/workings to a topic's individual page, with references to it in related documents.

See [Sprint List](./sprintList.md) for detailed changelog as sprints are completed.

## Requirement Variables:

Search the wiki for the following variables as final decisions are made:

* "X": usually an amount as in '"X" amount of points'
* "Y": usually a calculation, formula TBD

## Sections That Still Definitely Need Definition

* Need Object in [Module Planning](./ModulePlanning.md)
  * Needs definition around how workPointsValue will work. Currently, I have that this value is the smallest number of WorkPoints an object is worth, with the thought that external factors might increase the number awarded. Not sure if I want to have that information coded in the individual event or if it should run as a buff on the PC after the initial value is given.
  * Needs more definition around the confidenceChangeValue. I'm still not 100% sure how that process will work. Are there any objects that would change confidence or will confidence change only from events? Could events be considered need objects?
* Maths
  * What would be the calculation for the rates of decay on the Game Difficulty object?

## Notes that will need to be filed accordingly


## Game Design

* [Gameplay Experience](./Gameplay.md)
* [User Interface](./Interface.md)

## Art Design

* [Art](./Art.md)

## Game Mechanics

* [BasicNeeds](./BasicNeeds.md)
* [CodeBlocks](./CodeBlocks.md)
* [Confidence](./Confidence)
* [Days](./Days.md)

## Stretch Goals

* Fully developing the [Code Block Minigame](./CodeBlockMinigame.md)
* Allowing player to adjust difficulty of game (probably accomplished by changing the sweet spot range of [confidence](./Confidence.md)
* Allowing player to adjust character to play as an introvert or as a no-nonsense coder, which would change the rate of decay for the [basic needs](./BasicNeeds.md) and/or change the amount a given action will top off the need. For example: to an introvert, one party would be plenty to fill up a social bar, but for an extrovert, they will likely want to attend every social gathering.

## Module & Function Planning

Listing the modules in order of development. Details of the functions required for each module can be found on the [Module Planning](./ModulePlanning.md) page.