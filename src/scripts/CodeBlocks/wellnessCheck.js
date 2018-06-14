const addHistory = require('../DOM/addHistory')

const wellnessCheck = (hunger, social, fun) => {
	if ((hunger + social + fun) < 90){
		addHistory('I don\'t feel like coding right now. (Raise hunger, fun, or social and try again)')
		return false
	} else {
		return true
	}
}

module.exports = wellnessCheck