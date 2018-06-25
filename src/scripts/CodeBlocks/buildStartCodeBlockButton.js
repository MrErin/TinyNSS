const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const nukeControlSection = require('../DOM/nukeControlSection')
const startCodeBlockEventHandler = require('./startCodeBlockEventHandler')

const buildStartCodeBlockButton = () => {
	nukeControlSection('codeBlockControls')
	buttonFactory('Start Code Block', 'button', 'startCodeBlock', 'codeBlockControls')
	$('#startCodeBlock').on({
		click: function() {
			startCodeBlockEventHandler()
		}
	})
}

module.exports = buildStartCodeBlockButton