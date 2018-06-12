const addHistory = require('../DOM/addHistory')

const deathCheck = (need, value) => {
	const PC = db.Player

	if (PC[need] <= value) {
		addHistory('Hunger expired. You\'re dead.')
		return false
	}
	return true
}

module.exports = deathCheck
