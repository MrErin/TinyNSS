//this function is run only when the game is first loaded (or reloaded) to set the player's starting stats and reset the game days. It will also ask for the player's name, but will default to an existing name if there is one.
const fullPlayerReset = (database) => {
	const db = database
	const PC = db.Player
	const Game = db.Game
	const oldName = PC.name

	const characterName = prompt('What\'s your name?', oldName)
	PC.name = characterName
	console.log('updated name from fullPlayerReset')

	PC.isNew = true
	PC.coderPoints = 0
	PC.confidence = 9
	PC.energy = 100
	PC.hunger = 10
	PC.social = 20
	PC.fun = 20
	Game.currentDay = 0

	return db
}

module.exports = fullPlayerReset