const dbLoad = require('../Helpers/dbLoader')
const addHistory = require('../DOM/addHistory')

const needCheck = need => {
	const db = dbLoad()
	const PC = db.Player
	if (PC[need] <= 0) {
		addHistory('Hunger expired. You\'re dead.')
		return false
	}
	return true
}

module.exports = needCheck
