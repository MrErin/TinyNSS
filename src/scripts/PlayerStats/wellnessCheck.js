const addHistory = require('../DOM/addHistory')

const wellnessCheck = (hunger, social, fun) => {
	if ((hunger + social + fun) < 90){
		addHistory('Needs Too Low', 'I don\'t feel like coding right now. (Raise hunger, fun, or social and try again.)', 'far fa-sad-tear historyIcon', 0)
		return false
	} else {
		return true
	}
}

module.exports = wellnessCheck