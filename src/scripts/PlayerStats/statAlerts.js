const dbLoad = require('../Helpers/dbLoader')

//this function logs an alert to the console if a player's stats drop below 0 or rise above 100
const statAlerts = () => {
	const db = dbLoad()
	const PC = db.Player

	for(let key in PC) {
		if(key !== 'name' && key !== 'isNew') {
			if ((key !== 'coderPoints') && (key > 100)){
				console.log(`${key} is currently over 100.`)
			} else if ((key < 0)) {
				console.log(`${key} is currently less than 0.`)
			}

		}
	}
}

module.exports = statAlerts