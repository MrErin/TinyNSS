const gameDatabase = require('../Actors/gameDatabase')
const addHistory = require('../DOM/addHistory')

const needCheck = need => {
	gameDatabase.load()
	const PC = gameDatabase.entities.Player
	if (PC[need] <= 0) {
		addHistory('Hunger expired. You\'re dead.')
		return false
	}
	return true
}

module.exports = needCheck
