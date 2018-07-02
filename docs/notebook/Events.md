# Events

There are three types of events:

* Eating food
* Attending a party
* Attending a meetup

## Food

Any time the player clicks the "Eat" button, a food is randomly chosen from the "Events/Food" array and that food's score is applied to the PC's hunger. 

### Mechanics:

* The player is not allowed to eat if the PC is already full
* The player is not allowed to eat if the PC doesn't have enough energy
* The PC can starve to death if left unfed. The player will be notified that the game is over if the PC has starved to death.

## Parties and Meetups

Parties and meetups are very similar in their mechanics but they serve different functions. Generally, parties are more likely to boost the PC's hunger, social, and fun stats while meetups are more likely to award coder points and change confidence. At the start of each [game day](./Days.md), the game will create buttons for the events that have been randomly chosen

### Mechanics:

* Button creation
  * 0, 1, or 2 parties are possible.
  * 1, 2, or 3 meetups are possible.
* Parties and meetups are randomly chosen from the database at the start of each day.
* The player is notified of what happened during the event and of the stat changes caused by the event.
* Most parties and meetups will be positive experiences, resulting in boosts to the PC's stats, confidence, and/or coder points. There is a 25% chance that the event will be negative in some way, resulting in a worsening of the player's confidence or stats. Coder points are never removed by negative events.

## Participation

The game performs the following checks before allowing the PC to initiate an event:

* Food
  * The PC must have enough energy to eat
  * The PC must be at least hungry enough to accomodate the additional hunger points from the randomly chosen food.
* Parties & Meetups
  * The PC must have enough energy to attend the event