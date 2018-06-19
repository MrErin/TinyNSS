const buildPauseStartButton = require('./buildPauseStartButton')

const pauseTime = (counterName) => {
	buildPauseStartButton('start')
	clearInterval(counterName)
}

module.exports = pauseTime