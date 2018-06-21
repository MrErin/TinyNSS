const $ = require('jquery')
const updateAllBars = require('../DOM/updateAllBars')
const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const getRandomNumber = require('../Helpers/getRandomNumber')
const needCheck = require('../PlayerStats/needCheck')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const addHistoryDetails = require('../DOM/addHistoryDetails')


let eventUniqueKey = 1
const attachEventEventHandler = (buttonId, eventArray, eventIndex) => {
	$(`#${buttonId}`).click(() => {
		$(`#${buttonId}`).hide()
		const db = dbLoad()
		const PC = db.Player
		const event = db.Events[eventArray][eventIndex]
		let eventHeader
		let eventIcon
		if (eventArray === 'parties'){
			eventHeader = 'Party Time!'
			eventIcon = 'fas fa-birthday-cake historyIcon'
		} else if (eventArray === 'meetups'){
			eventHeader = 'Networking Time!'
			eventIcon = 'fas fa-handshake historyIcon'
		}
		const minEnergy = ((event.energyValue * -1) - 1)
		PC.isNew = false
		let isBuff = getRandomNumber(1,5)

		if (needCheck('energy', PC.energy, minEnergy, 10000)){
			// addHistory(`${PC.name} ${event.eventStartText}`)
			addHistory(eventHeader, `${PC.name} ${event.eventStartText}`, eventIcon, `eventDay${db.Game.currentDay}${eventUniqueKey}`)

			if (isBuff !== 2) {
				if(event.confidenceBuffValue !== 0) {
					PC.confidence += event.confidenceBuffValue
					addHistoryEffectList(`Confidence: ${event.confidenceBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.hungerBuffValue !== 0) {
					PC.hunger += event.hungerBuffValue
					addHistoryEffectList(`Hunger: ${event.hungerBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.socialBuffValue !== 0) {
					PC.social += event.socialBuffValue
					addHistoryEffectList(`Social: ${event.socialBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.funBuffValue !== 0) {
					PC.fun += event.funBuffValue
					addHistoryEffectList(`Fun: ${event.funBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				addHistoryDetails(event.buffText, `HistoryContenteventDay${db.Game.currentDay}${eventUniqueKey}`)
				$($(`HistoryContenteventDay${db.Game.currentDay}${eventUniqueKey}`)).addClass('buff')
			} else {
				if(event.confidenceDebuffValue !== 0) {
					PC.confidence += event.confidenceDebuffValue
					addHistoryEffectList(`Confidence: ${event.confidenceDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.hungerDebuffValue !== 0) {
					PC.hunger += event.hungerDebuffValue
					addHistoryEffectList(`Hunger: ${event.hungerDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.socialDebuffValue !== 0) {
					PC.social += event.socialDebuffValue
					addHistoryEffectList(`Social: ${event.socialDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.funDebuffValue) {
					PC.fun += event.funDebuffValue
					addHistoryEffectList(`Fun: ${event.funDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				addHistoryDetails(event.debuffText, `HistoryContenteventDay${db.Game.currentDay}${eventUniqueKey}`)
				$($(`HistoryContenteventDay${db.Game.currentDay}${eventUniqueKey}`)).addClass('debuff')
			}
			PC.energy += event.energyValue
			addHistoryEffectList(`Energy: ${event.energyValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
			if(event.coderPointValue !== 0) {
				PC.coderPoints += event.coderPointValue
				addHistoryEffectList(`Coder Points: ${event.coderPointValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
			}
		}
		dbSave(db)
		updateAllBars()
	})
	eventUniqueKey++
}

module.exports = attachEventEventHandler