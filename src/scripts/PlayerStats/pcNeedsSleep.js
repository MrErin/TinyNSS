const addHistory = require('../DOM/addHistory')
const pauseTime = require('../Time/pauseTime')

const pcNeedsSleep = () => {
	pauseTime(ticker)
	addHistory('You\'re too tired. End the day and start fresh tomorrow.')
}

module.exports = pcNeedsSleep