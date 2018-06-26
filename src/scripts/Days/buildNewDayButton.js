const newDay = require('./newDay')
const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')

//this function destroys and rebuilds the "End this day" button and its handler
const buildNewDayButton = () => {
	buttonFactory('End This Day', 'button', 'newDay', 'dayControls')
	$('#dayControls').off('click', '#newDay')
	$('#dayControls').on('click', '#newDay', function(){
		newDay()
	})
}

module.exports = buildNewDayButton