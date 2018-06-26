const $ = require('jquery')
const addHistory = require('../DOM/addHistory')
const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const addHistoryDetails = require('../DOM/addHistoryDetails')
const updateStats = require('../PlayerStats/updateStats')

let eventUniqueKey = 1

//this is the handler that is attached to the party and meetup buttons. the "eventArray" variable indicates which type of button it is (party or meetup)
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
		PC.isNew = false

		//there is a 1 in 4 chance that the event will be a debuff (have negative consequences). If the random number assigned to isBuff is 2, then the outcome will be negative.
		let isBuff = getRandomNumber(1,5)

		if (updateStats('energy', PC.energy, event.energyValue) === true) {

			//addHistory creates the history card for the event
			addHistory(eventHeader, `${PC.name} ${event.eventStartText}`, eventIcon, `eventDay${db.Game.currentDay}${eventUniqueKey}`)

			if (isBuff !== 2) {
				if(event.confidenceBuffValue !== 0) {
					updateStats('confidence', PC.confidence, event.confidenceBuffValue)
					addHistoryEffectList(`Confidence: ${event.confidenceBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.hungerBuffValue !== 0) {
					updateStats('hunger', PC.hunger, event.hungerBuffValue)
					addHistoryEffectList(`Hunger: ${event.hungerBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.socialBuffValue !== 0) {
					updateStats('social', PC.social, event.socialBuffValue)
					addHistoryEffectList(`Social: ${event.socialBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.funBuffValue !== 0) {
					updateStats('fun', PC.fun, event.funBuffValue)
					addHistoryEffectList(`Fun: ${event.funBuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}

				//addHistoryDetails notifies the player that the event had an overall positive outcome
				addHistoryDetails(event.buffText, 'far fa-grin-beam', 'buff', `eventDay${db.Game.currentDay}${eventUniqueKey}`)
			} else {
				if(event.confidenceDebuffValue !== 0) {
					updateStats('confidence', PC.confidence, event.confidenceDebuffValue)
					addHistoryEffectList(`Confidence: ${event.confidenceDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.hungerDebuffValue !== 0) {
					updateStats('hunger', PC.hunger, event.hungerDebuffValue)
					addHistoryEffectList(`Hunger: ${event.hungerDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.socialDebuffValue !== 0) {
					updateStats('social', PC.social, event.socialDebuffValue)
					addHistoryEffectList(`Social: ${event.socialDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}
				if(event.funDebuffValue) {
					updateStats('fun', PC.fun, event.funDebuffValue)
					addHistoryEffectList(`Fun: ${event.funDebuffValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
				}

				//addHistoryDetails notifies the player that the event had an overall negative outcome
				addHistoryDetails(event.debuffText, 'far fa-frown-open', 'debuff', `eventDay${db.Game.currentDay}${eventUniqueKey}`)
			}

			addHistoryEffectList(`Energy: ${event.energyValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)

			//add coder points last because there may be none associated with the event
			if(event.coderPointValue !== 0) {
				updateStats('coderPoints', PC.coderPoints, event.coderPointValue)
				addHistoryEffectList(`Coder Points: ${event.coderPointValue}`, `eventDay${db.Game.currentDay}${eventUniqueKey}`)
			}
		}
	})
	eventUniqueKey++
}

module.exports = attachEventEventHandler