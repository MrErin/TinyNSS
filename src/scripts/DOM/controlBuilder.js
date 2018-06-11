const $ = require('jquery')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buttonFactory = require('./buttonFactory')
// const updateBar = require('../DOM/updateBar')
// const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
// const dbSave = require('../Helpers/dbSaver')
const attachEventEventHandler = require('../Events/attachEventEventHandler')
const determineButtonElements = require('../Events/determineButtonElements')


const controlBuilder = () => {
	// const db = dbLoad()
	// const maxFood = db.Events.food.length
	// const chosenFood = getRandomNumber(0, maxFood)
	// const maxParties = db.Events.parties.length
	// const chosenParty = getRandomNumber(0, maxParties)
	// // const maxMeetups = db.Events.meetups.length

	// //create one food button.
	// //args: content, classes, id, parent
	// buttonFactory('Eat', 'button', 'eatFood', 'controls')
	// //args: button id, event array, event index
	// attachEventEventHandler('eatFood', 'food', chosenFood)

	// //create 2 parties
	// const party1 = buttonFactory('')


	// //create 3 meetups
//need to change the min here back to zero after testing is complete.
	determineButtonElements('parties', 2, 3)
	// determineButtonElements('meetups', 2, 3)


}

module.exports = controlBuilder