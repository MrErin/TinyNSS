const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const addHistory = require('../DOM/addHistory')
const dayPlayerReset = require('../Database/dayPlayerReset')
const fullPlayerReset = require('../Database/fullPlayerReset')
const buildRandomizedButtons = require('../DOM/buildRandomizedButtons')
const nukeControlSection = require('../DOM/nukeControlSection')
const updateAllBars = require('../DOM/updateAllBars')
const dayCheck = require('../Days/dayCheck')
const create_CodeBlockList = require('../CodeBlocks/create_CodeBlockList')
const startTime = require('../Time/startTime')
const pauseTime = require('../Time/pauseTime')
const addHistoryDetails = require('../DOM/addHistoryDetails')
const getRandomNumber = require('../Helpers/getRandomNumber')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')


const newDay = () => {
	const db = dbLoad()
	const Game = db.Game
	const Player = db.Player
	const oldScore = localStorage.getItem('tinyNSSScore')
	const score = Player.coderPoints
	const isConfidenceSwing = getRandomNumber(1,5)
	const confidenceUp = getRandomNumber(1,3)
	const todayMessage = db.Days[Game.currentDay].dayStartText

	if (dayCheck(db) === true) {

		Game.currentDay++

		//reset player. If it's day one, user gets a full reset
		if (Game.currentDay === 1) {
			fullPlayerReset(db)
			Game.currentDay = 1
			Player.isNew = false
		} else {
			dayPlayerReset(db)
		}
		console.log(`isConfidenceSwing: ${isConfidenceSwing}`)
		//add random confidence swing
		if (isConfidenceSwing === 2) {
			if (confidenceUp === 1) {
				// confidence up
				console.log(`confidenceUp: ${confidenceUp}`)
				Player.confidence += 2
				addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
				addHistoryDetails(`${Player.name} woke up feeling pumped today!`, 'far fa-grin-stars', 'buff', `newDay${Game.currentDay}`)
				addHistoryEffectList('Confidence: +2', `newDay${Game.currentDay}`)
			} else {
				//confidence down
				addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
				console.log(`confidenceDown: ${confidenceUp}`)
				Player.confidence -= 2
				addHistoryDetails(`${Player.name} woke up feeling insecure.`, 'far fa-flushed', 'debuff', `newDay${Game.currentDay}`)
				addHistoryEffectList('Confidence: -2', `newDay${Game.currentDay}`)
			}
		} else {
			addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', `newDay${Game.currentDay}`)
		}

		dbSave(db)
		updateAllBars()

		//new day message
		create_CodeBlockList(Game.currentDay)
		nukeControlSection('partiesControls')
		nukeControlSection('meetupsControls')
		buildRandomizedButtons()
		pauseTime(ticker)
		startTime()
	} else {
		addHistory('You Finished The Game!', `${db.Player.name} earned ${score} points. Great Job!`, 'fas fa-trophy', 'gameOver')
		if (oldScore < score) {
			localStorage.setItem('tinyNSSScore', score)
			addHistoryDetails('You got a new high score!', 'fas fa-crown', 'buff', 'gameOver')
		}

	}


}

module.exports = newDay