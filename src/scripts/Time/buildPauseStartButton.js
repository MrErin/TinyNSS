const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const nukeControlSection = require('../DOM/nukeControlSection')
const addHistory = require('../DOM/addHistory')

const buildPauseStartButton = (timeAction) => {
	nukeControlSection('timeControls')

	if(timeAction === 'start') {
		buttonFactory('Start Time', 'button', 'startTime', 'timeControls')
		const startTime = require('./startTime')
		$('#timeControls').on('click', '#startTime', function(){
			startTime()
			addHistory('Time resumed')
		})
	} else if (timeAction === 'pause') {
		buttonFactory('Pause Time', 'button', 'pauseTime', 'timeControls')
		const pauseTime = require('./pauseTime')
		$('#timeControls').on('click', '#pauseTime', function(){
			pauseTime(ticker)
			addHistory('Time paused. You\'re not cheating, are you?')
		})
	} else {
		console.log(`something went wrong. You fed ${timeAction} to the Time/buildPauseStartButton module.`)
	}
}

module.exports = buildPauseStartButton