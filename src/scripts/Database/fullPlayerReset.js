const fullPlayerReset = (database) => {
	const db = database
	const PC = db.Player
	const Game = db.Game

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