const $ = require('jquery')
const pauseTime = require('../Time/pauseTime')
const nukeControlSection = require('../DOM/nukeControlSection')
const addHistory = require('../DOM/addHistory')

const pcIsDead = () => {
	pauseTime(ticker)

	//something to disable buttons
	$('#newDay').prop('disabled', true)
	$('#eatFood').prop('disabled', true)
	$('#startCodeBlock').prop('disabled', true)
	$('#startTime').prop('disabled', true)
	$('#pauseTime').prop('disabled', true)
	nukeControlSection('partiesControls')
	nukeControlSection('meetupsControls')

	//notify player
	addHistory('Game Over. Please try again.')
}

module.exports = pcIsDead