const buildFoodButton = require('../Events/buildFoodButton')
const buildNewDayButton = require('../Days/buildNewDayButton')
const buildRandomizedButtons = require('./buildRandomizedButtons')
const nukeControlSection = require('./nukeControlSection')
const buildStartCodeBlockButton = require('../CodeBlocks/buildStartCodeBlockButton')

const controlBuilder = () => {
	buildFoodButton()
	nukeControlSection('partiesControls')
	nukeControlSection('meetupsControls')
	buildRandomizedButtons()
	buildNewDayButton()
	buildStartCodeBlockButton()
}

module.exports = controlBuilder