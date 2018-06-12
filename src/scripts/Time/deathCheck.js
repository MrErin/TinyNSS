const addHistory = require('../DOM/addHistory')

const deathCheck = (need, currentValue, deadValue) => {
	if (currentValue <= deadValue) {
		switch (need) {
		case 'hunger':
			addHistory('Hunger expired. You\'re dead.')
			return false
		case 'energy':
			addHistory('You\'re too tired. End the day and start fresh tomorrow.')
			return false
		default:
			addHistory('something went wrong. Check the /Time/deathCheck.js script.')
		}
	} else {
		return true
	}
}

module.exports = deathCheck
