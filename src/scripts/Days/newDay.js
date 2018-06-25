const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const addHistory = require('../DOM/addHistory')
const buildRandomizedButtons = require('../DOM/buildRandomizedButtons')
const nukeControlSection = require('../DOM/nukeControlSection')
const updateAllBars = require('../DOM/updateAllBars')
const create_CodeBlockList = require('../CodeBlocks/create_CodeBlockList')
const startTime = require('../Time/startTime')
const pauseTime = require('../Time/pauseTime')
const addHistoryDetails = require('../DOM/addHistoryDetails')
const getRandomNumber = require('../Helpers/getRandomNumber')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const advanceTheDay = require('./advanceTheDay')
const updateStats = require('../PlayerStats/updateStats')

//this function resets the game for each new day by updating the character's stats, rebuilding the code block list, rolling for a confidence buff/debuff, notifying the player of changes, and notifying the player if the game is over.

//!Note: advancing the day as the first item in this function in order to avoid db save conflicts. Possible refator opportunity in the future.
const newDay = () => {

	advanceTheDay()

	const db = dbLoad()
	const Game = db.Game
	const PC = db.Player
	const oldScore = localStorage.getItem('tinyNSSScore')
	const score = PC.coderPoints
	const isConfidenceSwing = getRandomNumber(1,5)
	const today = Game.currentDay

	//valid game days are 1 - 10 rather than 0 - 9
	if (today <= 10) {
		PC.isNew = false
		updateStats('energy', 0, 100)
		if (PC.confidence >= 6) {
			updateStats('confidence', PC.confidence, -0.5)
		} else {
			updateStats('confidence', PC.confidence, 0.5)
		}
		if (PC.hunger >= 60) {
			updateStats('hunger', PC.hunger, -30)
		} else {
			updateStats('hunger', PC.hunger, 30)
		}
		if (PC.social <= 10) {
			updateStats('social', PC.social, 20)
		}
		if (PC.fun <= 10) {
			updateStats('fun', PC.fun, 20)
		}

		//declaring today message here to avoid bugs from having a day 11 at the top of the script
		const todayMessage = db.Days[Game.currentDay].dayStartText

		//add random confidence swing. If the random number is 2, there will be a confidence swing.
		if (isConfidenceSwing === 2) {
			const confidenceUp = getRandomNumber(1,3)

			//if the random confidenceUp number is 1, then the confidence swing is positive.
			if (confidenceUp === 1) {
				updateStats('confidence', PC.confidence, 2)
				addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
				addHistoryDetails(`${PC.name} woke up feeling pumped today!`, 'far fa-grin-stars', 'buff', `newDay${Game.currentDay}`)
				addHistoryEffectList('Confidence: +2', `newDay${Game.currentDay}`)
			} else {
				addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
				updateStats('confidence', PC.confidence, -2)
				addHistoryDetails(`${PC.name} woke up feeling insecure.`, 'far fa-flushed', 'debuff', `newDay${Game.currentDay}`)
				addHistoryEffectList('Confidence: -2', `newDay${Game.currentDay}`)
			}
		} else {
			addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
		}

		//create the controls and code block list for the day
		create_CodeBlockList(Game.currentDay)
		nukeControlSection('partiesControls')
		nukeControlSection('meetupsControls')
		buildRandomizedButtons()
		pauseTime(ticker)
		startTime()
	} else if (today > 10) {
		//if the ended day was the last day (day 10), you get the end screen
		addHistory('You Finished The Game!', `${PC.name} earned ${score} points. Great Job!`, 'fas fa-trophy', 'gameOver')
		addHistoryDetails('Refresh the page to play again!', 'fas fa-redo', '', 'gameOver')
		if (oldScore < score) {
			localStorage.setItem('tinyNSSScore', score)
			addHistoryDetails('You got a new high score!', 'fas fa-crown', 'buff', 'gameOver')
		}

	}

}

module.exports = newDay