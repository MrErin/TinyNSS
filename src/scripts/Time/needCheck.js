const gameDatabase = require('../Actors/gameDatabase')

const needCheck = need => {
	gameDatabase.load()
	const PC = gameDatabase.entities.Player
	if (PC[need] <= 0) {
		console.log('Hunger expired. You\'re dead.')
		return false
	}
	return true
}

module.exports = needCheck
