const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const addHistory = require('../DOM/addHistory')

const buildFoodButton = () => {
	buttonFactory('Eat', 'button', 'eatFood', 'foodControls')
	$('#eatFood').click(() => {
		const db = dbLoad()
		const PC = db.Player
		const chosenFood = db.Events.food[getRandomNumber(0, (db.Events.food.length))]

		addHistory(`${PC.name} ${chosenFood.eventStartText} for ${chosenFood.hungerBuffValue} points. Yum!`)

		PC.isNew = false
		PC.energy += chosenFood.energyValue
		PC.workPoints += chosenFood.workPointValue
		PC.confidence += chosenFood.confidenceBuffValue
		PC.hunger += chosenFood.hungerBuffValue
		PC.social += chosenFood.socialBuffValue
		PC.fun += chosenFood.funBuffValue

		dbSave(db)
		updateAllBars()

	})
}

module.exports = buildFoodButton