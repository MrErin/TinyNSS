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

const newDay = () => {
	const db = dbLoad()
	const Game = db.Game
	const Player = db.Player

	//stuff that happens to close out the previous day
	// addHistory(`End of Day ${Game.currentDay}`, 'Great job!', 'far fa-moon historyIcon', 0)

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
		dbSave(db)
		updateAllBars()

		//new day message
		create_CodeBlockList(Game.currentDay)
		const todayMessage = db.Days[Game.currentDay].dayStartText
		addHistory('It\'s a brand new day!', todayMessage, 'far fa-sun historyIcon', 0)
		nukeControlSection('partiesControls')
		nukeControlSection('meetupsControls')
		buildRandomizedButtons()
		pauseTime(ticker)
		startTime()
	} else {
		console.log('At some point, this was triggered. Add an else history message back to the Days/newDay script')
	}


}

module.exports = newDay