const $ = require('jquery')
const submitCodeBlock = require('./submitCodeBlock')
const inputCheck = require('./inputCheck')
const startTime = require('../Time/startTime')
const askForHelpEventHandler = require('./askForHelpEventHandler')
const codeBlockTextDisplay = require('./codeBlockTextDisplay')
const pauseTime = require('../Time/pauseTime')

//this function displays the code block modal and attaches the relevant event handlers.
const displayCodeBlock = (codeId, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language) => {

	//is-active class displays the modal in bulma
	$('#modalCanvas').addClass('is-active')

	//function displays the chosen code block text based on complication
	codeBlockTextDisplay(codeId, complicationBanner)

	$('#playerInput').focus()

	//disable the ask for help button unless its needed
	if (complicationBanner === 'correct'){
		$('#askForHelp').prop('disabled', true)
	} else {
		$('#askForHelp').prop('disabled', false)
	}

	//create banners and add classes to notify player whether this code is new or review, and what their level of confidence is
	$('#complicationBanner').removeClass()
	$('#complicationBanner').addClass('modal-card-body')
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#dayBanner').removeClass()
	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#codeBlockTitle').text(`${language}: ${blockTitle}`)

	//functionality on the close button
	$('#closeModal').hover(function(){
		$('#closeCodeBlockWarning').slideDown('500')
	}, function() {
		$('#closeCodeBlockWarning').slideUp('500')
	})
	$('#modalCanvas').off('click', '#closeModal')
	$('#modalCanvas').on('click', '#closeModal', function(){
		$('#modalCanvas').removeClass('is-active')

		//the message gets built in the background without being displayed until the player hits "submit". this removes the built message if the player closes the modal without completing the code block
		$(`#HistoryCodeBlock${codeId}`).remove()
		$('#playerInput').val('')
		pauseTime(ticker)
		startTime()
	})
	$('#modalCanvas').off('click', '#askForHelp')
	$('#modalCanvas').on('click', '#askForHelp', function(){
		askForHelpEventHandler(codeId, complicationBanner)
	})
	$('#modalCanvas').off('keyup', '#playerInput')
	$('#modalCanvas').on('keyup', '#playerInput', function(){
		inputCheck(correctCode)
	})
	$('#submitCodeBlock').prop('disabled', true)
	$('#modalCanvas').off('click', '#submitCodeBlock')
	$('#modalCanvas').on('click', '#submitCodeBlock', function(){
		submitCodeBlock(complicationBanner, codeId)
	})
}

module.exports = displayCodeBlock