const newDay = require('./newDay')
const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const dbLoad = require('../Helpers/dbLoader')


const buildNewDayButton = () => {
	buttonFactory('End This Day', 'button', 'newDay', 'dayControls')
	$('#dayControls').on('click', '#newDay', function(){
		newDay()
	})
}

module.exports = buildNewDayButton