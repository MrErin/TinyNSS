const addHistory = require('../DOM/addHistory')

const dayCheck = (database) => {
	const db = database
	const today = db.Game.currentDay

	if(today >= 10) {
		addHistory('You Finished The Game!', `${db.Player.name} earned ${db.Player.coderPoints} points. Great Job!`, 'fas fa-trophy', 0)
		return false
	} else {
		return true
	}
}

module.exports = dayCheck