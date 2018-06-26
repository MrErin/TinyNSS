const addHistory = require('../DOM/addHistory')
const pauseTime = require('../Time/pauseTime')

//this function notifies the player that it's time to end the day and rest.
const pcNeedsSleep = () => {
	pauseTime(ticker)
	addHistory('You need sleep.', 'You\'re too tired. End the day and start fresh tomorrow.', 'fas fa-bed historyIcon', 0)
}

module.exports = pcNeedsSleep