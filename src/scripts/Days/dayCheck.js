const dayCheck = (database) => {
	const db = database
	const today = db.Game.currentDay

	if(today >= 10) {
		return false
	} else {
		return true
	}
}

module.exports = dayCheck