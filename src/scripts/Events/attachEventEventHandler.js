const $ = require('jquery')
const updateAllBars = require('../DOM/updateAllBars')
const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const getRandomNumber = require('../Helpers/getRandomNumber')
const needCheck = require('../Time/needCheck')

const isBuff = (eventArray) => {
	return ((getRandomNumber(1, 5) > 1) ? true : false)
}

const attachEventEventHandler = (buttonId, eventArray, eventIndex) => {
	$(`#${buttonId}`).click(() => {
		$(`#${buttonId}`).hide()
		const db = dbLoad()
		const PC = db.Player
		const event = db.Events[eventArray][eventIndex]
		const minEnergy = ((event.energyValue * -1) - 1)
		PC.isNew = false


		if ((needCheck('energy', minEnergy, 10000)) === true){
			addHistory(`${PC.name} ${event.eventStartText}`)

			PC.energy += event.energyValue
			PC.workPoints += event.workPointValue

			if (isBuff(eventArray)) {
				PC.confidence += event.confidenceBuffValue
				PC.hunger += event.hungerBuffValue
				PC.social += event.socialBuffValue
				PC.fun += event.funBuffValue
				addHistory(event.buffText)
			} else {
				PC.confidence += event.confidenceDebuffValue
				PC.hunger += event.hungerDebuffValue
				PC.social += event.socialDebuffValue
				PC.fun += event.funDebuffValue
				addHistory(event.debuffText)
			}
		}
		dbSave(db)
		updateAllBars()
	})
}

module.exports = attachEventEventHandler