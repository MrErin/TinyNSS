const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const nukeControlSection = require('../DOM/nukeControlSection')

const buildPauseStartButton = (timeAction) => {
	nukeControlSection('timeControls')

	if(timeAction === 'start') {
		buttonFactory('Start Time', 'button', 'startTime', 'timeControls')
		const startTime = require('./startTime')
		$('#startTime').click(() => {
			startTime()
		})

	} else if (timeAction === 'pause') {
		buttonFactory('Pause Time', 'button', 'pauseTime', 'timeControls')
		const pauseTime = require('./pauseTime')
		$('#pauseTime').click(() => {
			pauseTime(ticker)
		})
	} else {
		console.log(`something went wrong. You fed ${timeAction} to the Time/buildPauseStartButton module.`)
	}
}

module.exports = buildPauseStartButton