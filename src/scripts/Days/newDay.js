const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const addHistory = require('../DOM/addHistory')
const dayPlayerReset = require('../Database/dayPlayerReset')
const fullPlayerReset = require('../Database/fullPlayerReset')
const buildRandomizedButtons = require('../DOM/buildRandomizedButtons')
const nukeControlSection = require('../DOM/nukeControlSection')
const updateAllBars = require('../DOM/updateAllBars')
const tickCheck = require('../Time/tickCheck')
const dayCheck = require('../Days/dayCheck')

const newDay = () => {
	const db = dbLoad()
	const Game = db.Game
	const Player = db.Player

	//stuff that happens to close out the previous day
	addHistory(`End of Day ${Game.currentDay}. Great job!`)

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
		const todayMessage = db.Days[Game.currentDay].dayStartText
		addHistory(`It's a brand new day! ${todayMessage}`)
		nukeControlSection('partiesControls')
		nukeControlSection('meetupsControls')
		buildRandomizedButtons()
		tickCheck()
	} else {
		addHistory('Game Over! Thanks for Playing!')
	}


}

module.exports = newDay