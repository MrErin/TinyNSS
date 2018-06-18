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
	$('#closeModal').click(() => {
		$('#modalCanvas').removeClass('is-active')
		startTime()
	})
	$('#playerInput').keyup(function(){
		inputCheck(correctCode)
	})
	$('#submitCodeBlock').prop('disabled', true)
	$('#submitCodeBlock').click(function() {
		submitCodeBlock(complicationBanner)
	})

}

module.exports = displayCodeBlock