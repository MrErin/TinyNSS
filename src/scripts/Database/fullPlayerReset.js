const fullPlayerReset = (database) => {
	const db = database
	const PC = db.Player
	const Game = db.Game

	PC.isNew = true
	PC.coderPoints = 0
	PC.confidence = 5
	PC.energy = 100
	PC.hunger = 50
	PC.social = 50
	PC.fun = 50
	Game.currentDay = 0

	return db
}

module.exports = fullPlayerReset