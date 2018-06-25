const $ = require('jquery')
const pauseTime = require('../Time/pauseTime')
const nukeControlSection = require('../DOM/nukeControlSection')
const addHistory = require('../DOM/addHistory')

//this function handles everything that needs to happen if the character dies (I think starving is the only means of death ATM)
const pcIsDead = () => {

	pauseTime(ticker)

	//disable the controls
	$('#newDay').prop('disabled', true)
	$('#eatFood').prop('disabled', true)
	$('#startCodeBlock').prop('disabled', true)
	$('#startTime').prop('disabled', true)
	$('#pauseTime').prop('disabled', true)
	nukeControlSection('partiesControls')
	nukeControlSection('meetupsControls')

	//notify the player
	addHistory('Game Over', 'Please try again.',
		'fas fa-ban historyIcon', 0)
}

module.exports = pcIsDead