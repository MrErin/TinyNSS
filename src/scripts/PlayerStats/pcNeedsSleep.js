const addHistory = require('../DOM/addHistory')
const pauseTime = require('../Time/pauseTime')

const pcNeedsSleep = () => {
	pauseTime(ticker)
	addHistory('You need sleep.', 'You\'re too tired. End the day and start fresh tomorrow.', 'fas fa-bed historyIcon', 0)
}

module.exports = pcNeedsSleep