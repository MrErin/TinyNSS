const $ = require('jquery')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buttonFactory = require('./buttonFactory')
const dbLoad = require('../Helpers/dbLoader')
const attachEventEventHandler = require('../Events/attachEventEventHandler')
const determineButtonElements = require('../Events/determineButtonElements')
const buildFoodButton = require('../Events/buildFoodButton')


const controlBuilder = () => {
	buildFoodButton()
	determineButtonElements('parties', 0, 3)
	determineButtonElements('meetups', 1, 4)


}

module.exports = controlBuilder