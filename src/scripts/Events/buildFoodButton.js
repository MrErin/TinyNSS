const $ = require('jquery')
const buttonFactory = require('../DOM/buttonFactory')
const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const addHistory = require('../DOM/addHistory')
const needCheck = require('../PlayerStats/needCheck')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')

let uniqueKey = 0

const buildFoodButton = () => {
	buttonFactory('Eat', 'button', 'eatFood', 'foodControls')
	$('#foodControls').off('click', '#eatFood')
	$('#foodControls').on('click', '#eatFood', function(){
		const db = dbLoad()
		const PC = db.Player
		const chosenFood = db.Events.food[getRandomNumber(0, (db.Events.food.length))]
		const minEnergy = ((chosenFood.energyValue * -1) - 1)
		PC.isNew = false

		if(needCheck('energy', PC.energy,  minEnergy, 10000)){
			if(needCheck('hunger', PC.hunger, 0, 90)){
				addHistory('Nom Nom Nom',`${PC.name} ${chosenFood.eventStartText}`, 'fas fa-utensils historyIcon', `foodDay${db.Game.currentDay}${uniqueKey}`)

				if (chosenFood.energyValue !== 0) {
					PC.energy += chosenFood.energyValue

					addHistoryEffectList(`Energy: ${chosenFood.energyValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
				if (chosenFood.workPointValue !== 0) {
					PC.workPoints += chosenFood.workPointValue

					addHistoryEffectList(`Work Points: ${chosenFood.workPointValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
				if (chosenFood.confidenceBuffValue !== 0) {
					PC.confidence += chosenFood.confidenceBuffValue

					addHistoryEffectList(`Confidence: ${chosenFood.confidenceBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
				if (chosenFood.socialBuffValue !== 0) {
					PC.social += chosenFood.socialBuffValue

					addHistoryEffectList(`Social: ${chosenFood.socialBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
				if (chosenFood.hungerBuffValue !== 0) {
					PC.hunger += chosenFood.hungerBuffValue

					addHistoryEffectList(`Hunger: ${chosenFood.hungerBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
				if (chosenFood.funBuffValue !== 0) {
					PC.fun += chosenFood.funBuffValue

					addHistoryEffectList(`Fun: ${chosenFood.funBuffValue}`, `foodDay${db.Game.currentDay}${uniqueKey}`)
				}
			}
		}

		dbSave(db)
		updateAllBars()
	})
	uniqueKey++
}

module.exports = buildFoodButton