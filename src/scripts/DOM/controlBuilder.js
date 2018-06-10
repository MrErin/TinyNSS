const $ = require('jquery')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buttonFactory = require('./buttonFactory')
// const updateBar = require('../DOM/updateBar')
// const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
// const dbSave = require('../Helpers/dbSaver')
const attachEventEventHandler = require('./eventEventHandlers')


const controlBuilder = () => {
	const db = dbLoad()
	const min = 0
	const maxFood = db.Events.food.length
	// const foodNumber = getRandomNumber(min, maxFood)
	const chosenFood = getRandomNumber(min, maxFood)
	// const maxParties = db1.Events.parties.length
	// const maxMeetups = db1.Events.meetups.length


	//content, classes, id, parent
	buttonFactory('Eat', 'button', 'eatFood', 'controls')
	attachEventEventHandler('eatFood', 'food', chosenFood)

	// $('#eatFood').click(() => {
	// 	//get a random food

	// 	//update the PC object for that food
	// 	const db2 = dbLoad()
	// 	const PC = db2.Player
	// 	PC.isNew = false
	// 	PC.hunger += chosenFood.hungerBuffValue
	// 	dbSave(db2)

	// 	//update the bar for that food
	// 	updateBar('hunger')

	// 	//create message for that food
	// 	addHistory(`${PC.name} ${chosenFood.eventStartText} for ${chosenFood.hungerBuffValue} points. Yum!`)
	// })
}

module.exports = controlBuilder