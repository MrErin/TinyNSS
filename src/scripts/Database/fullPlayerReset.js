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
	PC.confidence = 9.5
	PC.energy = 100
	PC.hunger = 90
	PC.social = 20
	PC.fun = 20
	Game.currentDay = 0

	return db
}

module.exports = fullPlayerReset