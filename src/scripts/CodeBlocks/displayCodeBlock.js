const $ = require('jquery')
const tickCheck = require('../Time/tickCheck')
const submitCodeBlock = require('./submitCodeBlock')

const displayCodeBlock = (codeText, blockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage) => {
	$('#modalCanvas').addClass('is-active')
	$('#codeBlockContent').html(codeText)
	$('#complicationBanner').text(complicationMessage).addClass(`${complicationBanner}Flag`)
	$('#dayBanner').text(dayMessage).addClass(`${dayBanner}CodeBlock`)
	$('#closeModal').click(() => {
		$('#modalCanvas').removeClass('is-active')
		tickCheck()
	})
	$('#codeBlockTitle').text(blockTitle)
	$('#submitCodeBlock').click(function() {
		submitCodeBlock(complicationBanner)
	})

}

module.exports = displayCodeBlock