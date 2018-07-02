const $ = require('jquery')
const pauseTime = require('../Time/pauseTime')
const nukeControlSection = require('../DOM/nukeControlSection')

//this function disables buttons and stops time. It's called when the game is over either because of winning or because the character starved to death.
const gameOver = () => {
	pauseTime(ticker)

	//disable the controls
	$('#newDay').prop('disabled', true)
	$('#eatFood').prop('disabled', true)
	$('#startCodeBlock').prop('disabled', true)
	$('#startTime').prop('disabled', true)
	$('#pauseTime').prop('disabled', true)
	nukeControlSection('partiesControls')
	nukeControlSection('meetupsControls')
}

module.exports = gameOver