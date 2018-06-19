const $ = require('jquery')
const submitCodeBlock = require('./submitCodeBlock')
const inputCheck = require('./inputCheck')
const startTime = require('../Time/startTime')
const askForHelpEventHandler = require('./askForHelpEventHandler')
const codeBlockTextDisplay = require('./codeBlockTextDisplay')

const displayCodeBlock = (codeId, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language) => {
	$('#modalCanvas').addClass('is-active')
	codeBlockTextDisplay(codeId, complicationBanner)
	$('#askForHelp').prop('disabled', true)
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#askForHelp').prop('disabled', false)

	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#codeBlockTitle').text(`${language}: ${blockTitle}`)
	$('#modalCanvas').on('click', '#closeModal', function(){
		$('#modalCanvas').removeClass('is-active')
		$('#playerInput').val('')
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
	$('#modalCanvas').on('click', '#submitCodeBlock', function(){
		submitCodeBlock(complicationBanner)
	})
}

module.exports = displayCodeBlock