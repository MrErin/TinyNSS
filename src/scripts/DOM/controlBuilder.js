const $ = require('jquery')
const getRandomNumber = require('../Helpers/getRandomNumber')
const gameDatabase = require('../Actors/gameDatabase')
const buttonFactory = require('./buttonFactory')
const updateBar = require('../DOM/updateBar')
const addHistory = require('../DOM/addHistory')

const min = 0
console.log(gameDatabase)
console.log(gameDatabase.entities)
console.log(gameDatabase.entities.Events)
console.log(gameDatabase.entities.Events.food)
const maxFood = gameDatabase.entities.Events.food.length
// const maxParties = gameDatabase.entities.Events.parties
// const maxMeetups = gameDatabase.entities.Events.meetups

const controlBuilder = () => {
	buttonFactory('Eat', 'button', 'eatFood', 'controls')
	// $('#eatFood').click(() => {
	// 	//get a random food
	// 	const foodNumber = getRandomNumber(min, maxFood)
	// 	const chosenFood = gameDatabase.entities.Events.food[foodNumber]

	// 	//update the PC object for that food
	// 	const PC = gameDatabase.entities.Player
	// 	PC.hunger += chosenFood.hungerBuffValue

	// 	//update the bar for that food
	// 	updateBar('hunger', chosenFood.hungerBuffValue)

	// 	//create message for that food
	// 	addHistory(`${PC.name} ${chosenFood.eventStartText} for ${chosenFood.hungerBuffValue} points. Yum!`)
	// })
}

module.exports = controlBuilder