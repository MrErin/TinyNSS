const $ = require('jquery')
const submitCodeBlock = require('./submitCodeBlock')
const inputCheck = require('./inputCheck')
const startTime = require('../Time/startTime')
const askForHelpEventHandler = require('./askForHelpEventHandler')
const codeBlockTextDisplay = require('./codeBlockTextDisplay')
const pauseTime = require('../Time/pauseTime')

const displayCodeBlock = (codeId, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language) => {
	$('#modalCanvas').addClass('is-active')
	codeBlockTextDisplay(codeId, complicationBanner)

	$('#playerInput').focus()
	if (complicationBanner === 'correct'){
		$('#askForHelp').prop('disabled', true)
	} else {
		$('#askForHelp').prop('disabled', false)
	}
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#codeBlockTitle').text(`${language}: ${blockTitle}`)
	$('#closeModal').hover(function(){
		$('#closeCodeBlockWarning').slideDown('500')
	}, function() {
		$('#closeCodeBlockWarning').slideUp('500')
	})
	$('#modalCanvas').off('click', '#closeModal')
	$('#modalCanvas').on('click', '#closeModal', function(){
		$('#modalCanvas').removeClass('is-active')
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