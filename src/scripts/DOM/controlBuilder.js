const buildFoodButton = require('../Events/buildFoodButton')
const buildNewDayButton = require('../Days/buildNewDayButton')
const buildRandomizedButtons = require('./buildRandomizedButtons')
const nukeControlSection = require('./nukeControlSection')

const controlBuilder = () => {
	buildFoodButton()
	nukeControlSection('partiesControls')
	nukeControlSection('meetupsControls')
	buildRandomizedButtons()
	buildNewDayButton()
}

module.exports = controlBuilder