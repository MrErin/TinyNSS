const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')

//this function only advances the day. Created it to avoid having save overlaps in the newDay function.
const advanceTheDay = () => {

	const db = dbLoad()
	db.Game.currentDay++
	dbSave(db)
}

module.exports = advanceTheDay