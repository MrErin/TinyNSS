const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const addHistory = require('../DOM/addHistory')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const updateStats = require('../PlayerStats/updateStats')

let uniqueKey = 0

//this function selects a random food from the food event table and builds a button and handler for the eating of that food.
const buildFoodButton = () => {
	buttonFactory('Eat', 'button', 'eatFood', 'foodControls')
	$('#foodControls').off('click', '#eatFood')
	$('#foodControls').on('click', '#eatFood', function(){
		const db = dbLoad()
		const PC = db.Player
		const chosenFood = db.Events.food[getRandomNumber(0, (db.Events.food.length))]
		PC.isNew = false

		//if statement checks that the food will not cause the player's hunger score to go above 100.
		if(updateStats('hunger', PC.hunger, chosenFood.hungerBuffValue) === true) {
			addHistory('Nom Nom Nom',`${PC.name} ${chosenFood.eventStartText}`, 'fas fa-utensils historyIcon', `foodDay${db.Game.currentDay}${uniqueKey}`)

			//all if statements inside this one only add an effect to the list if an effect exists.

			if (chosenFood.energyValue !== 0) {
				updateStats('energy', PC.energy, chosenFood.energyValue)
				addHistoryEffectList(`Energy: ${chosenFood.energyValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
			if (chosenFood.coderPointValue !== 0) {
				updateStats('coderPoints', PC.coderPoints, chosenFood.coderPointValue)
				addHistoryEffectList(`Coder Points: ${chosenFood.coderPointValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
			if (chosenFood.confidenceBuffValue !== 0) {
				updateStats('confidence', PC.confidence, chosenFood.confidenceBuffValue)
				addHistoryEffectList(`Confidence: ${chosenFood.confidenceBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
			if (chosenFood.socialBuffValue !== 0) {
				updateStats('social', PC.social, chosenFood.socialBuffValue)
				addHistoryEffectList(`Social: ${chosenFood.socialBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
			if (chosenFood.hungerBuffValue !== 0) {
				//!not adding an update to hunger here because that should have been completed in the check of the if condition
				addHistoryEffectList(`Hunger: ${chosenFood.hungerBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
			if (chosenFood.funBuffValue !== 0) {
				updateStats('fun', PC.fun, chosenFood.funBuffValue)
				addHistoryEffectList(`Fun: ${chosenFood.funBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
			}
		}
	})
	uniqueKey++
}

module.exports = buildFoodButton