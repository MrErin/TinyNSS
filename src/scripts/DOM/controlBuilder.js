const $ = require('jquery')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buttonFactory = require('./buttonFactory')
const updateBar = require('../DOM/updateBar')
const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')


const controlBuilder = () => {
	const db = dbLoad()
	const min = 0
	const maxFood = db.Events.food.length
	const maxParties = db.Events.parties.length
	const maxMeetups = db.Events.meetups.length

	buttonFactory('Eat', 'button', 'eatFood', 'controls')
	$('#eatFood').click(() => {
		//get a random food
		const foodNumber = getRandomNumber(min, maxFood)
		const chosenFood = db.Events.food[foodNumber]

		//update the PC object for that food
		const PC = db.Player
		PC.isNew = false
		PC.hunger += chosenFood.hungerBuffValue
		dbSave(db)

		//update the bar for that food
		updateBar('hunger')

		//create message for that food
		addHistory(`${PC.name} ${chosenFood.eventStartText} for ${chosenFood.hungerBuffValue} points. Yum!`)
	})
}

module.exports = controlBuilder