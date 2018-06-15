const $ = require('jquery')
const tickCheck = require('../Time/tickCheck')
const submitCodeBlock = require('./submitCodeBlock')
const inputCheck = require('./inputCheck')

const displayCodeBlock = (codeText, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode) => {
	$('#modalCanvas').addClass('is-active')
	$('#codeBlockContent').text(codeText)
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#codeBlockTitle').text(blockTitle)
	$('#closeModal').click(() => {
		$('#modalCanvas').removeClass('is-active')
		tickCheck()
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