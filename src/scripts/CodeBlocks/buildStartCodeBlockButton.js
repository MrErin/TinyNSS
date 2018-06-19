const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const nukeControlSection = require('../DOM/nukeControlSection')
const startCodeBlockEventHandler = require('./startCodeBlockEventHandler')

const buildStartCodeBlockButton = () => {
	$('#startCodeBlock').off('click')
	$('#submitCodeBlock').off('click')
	$('#closeModal').off('click')
	nukeControlSection('codeBlockControls')
	buttonFactory('Start Code Block', 'button', 'startCodeBlock', 'codeBlockControls')
	$('#startCodeBlock').on({
		click: function() {
			startCodeBlockEventHandler()
		}
	})
}

module.exports = buildStartCodeBlockButton