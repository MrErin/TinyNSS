const $ = require('jquery')
const updateAllBars = require('./updateAllBars')
const addHistory = require('./addHistory')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const getRandomNumber = require('../Helpers/getRandomNumber')


const isBuff = () => {
	if (eventArray === 'food') {
		return true
	} else {
		return ((getRandomNumber(1,101) > 25) ? true : false)
	}
}

const attachEventEventHandler = (buttonId, eventArray, eventIndex) => {
	// debugger
	$(`#${buttonId}`).click(() => {
		const db = dbLoad()
		const PC = db.Player
		const event = db.Events[eventArray][eventIndex]

		if (eventArray === 'food') {
			addHistory(`${PC.name} ${event.eventStartText} for ${event.hungerBuffValue} points. Yum!`)
		} else {
			addHistory(`${PC.Name} ${event.eventStartText}`)
		}

		PC.isNew = false
		PC.energy += event.energyValue
		PC.workPoints += event.workPointValue

		if (isBuff) {
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
		dbSave(db)
		updateAllBars()
	})
}

module.exports = attachEventEventHandler