const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const nukeControlSection = require('../DOM/nukeControlSection')
const addHistory = require('../DOM/addHistory')

const buildPauseStartButton = (timeAction) => {
	// debugger
	nukeControlSection('timeControls')

	if(timeAction === 'start') {
		const startTime = require('./startTime')
		const pauseTime = require('./pauseTime')
		buttonFactory('Start Time', 'button', 'startTime', 'timeControls')
		$('#timeControls').off('click', '#startTime')
		$('#timeControls').on('click', '#startTime', function(){
			pauseTime(ticker)
			startTime()
			addHistory('Time Resumed', '', 'far fa-clock historyIcon', 0)
		})
	} else if (timeAction === 'pause') {
		buttonFactory('Pause Time', 'button', 'pauseTime', 'timeControls')
		const pauseTime = require('./pauseTime')
		$('#timeControls').off('click', '#pauseTime')
		$('#timeControls').on('click', '#pauseTime', function(){
			pauseTime(ticker)
			addHistory('Time Paused', 'You\'re not cheating, are you?', 'far fa-clock historyIcon', 0)
		})
	} else {
		console.log(`something went wrong. You fed ${timeAction} to the Time/buildPauseStartButton module.`)
	}
}

module.exports = buildPauseStartButton