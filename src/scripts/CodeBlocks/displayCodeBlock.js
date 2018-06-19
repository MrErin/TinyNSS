const $ = require('jquery')
const submitCodeBlock = require('./submitCodeBlock')
const inputCheck = require('./inputCheck')
const startTime = require('../Time/startTime')

const displayCodeBlock = (codeText, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language) => {
	$('#modalCanvas').addClass('is-active')
	$('#codeBlockContent').text(codeText)
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#codeBlockTitle').text(`${language}: ${blockTitle}`)
	$('#modalCanvas').on('click', '#closeModal', function(){
		$('#modalCanvas').removeClass('is-active')
		$('#playerInput').val('')
		startTime()
	})
	$('#modalCanvas').off('keyup', '#playerInput')
	$('#modalCanvas').on('keyup', '#playerInput', function(){
		inputCheck(correctCode)
	})
	$('#submitCodeBlock').prop('disabled', true)
	$('#submitCodeBlock').on('click', '#submitCodeBlock', function(){
		submitCodeBlock(complicationBanner)
	})
}

module.exports = displayCodeBlock