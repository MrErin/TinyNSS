const gameDatabase = require('./create_GameDatabase')
const dbSave = require('../Helpers/dbSaver')
const initializeDatabase = require('./initializeDatabase')
const objectLength = require('../Helpers/objectLength')
const fullPlayerReset = require('./fullPlayerReset')

//this function is run on main.js to determine whether to destroy and rebuild the database
const determineSave = () => {
	const db = gameDatabase.load()

	//if the database doesn't exist, create it.
	if (db === null || db === 'undefined' || typeof db !== 'object') {
		initializeDatabase()
		console.log('created new database A')
		gameDatabase.save()

	//if the database exists but is incomplete, destroy and rebuild it
	} else if (objectLength(db) < 6) {
		initializeDatabase()
		console.log('created new database B')
		gameDatabase.save()

	//if the database exists but a game is already in progress...
	} else if (db.Player.isNew === false) {

		//if the game in progress has made it past day 10, the entire game needs to be reset
		if (db.Game.currentDay === 11) {
			initializeDatabase()
			console.log('reset game after day 10')
			gameDatabase.save()

		//if the game in progress is not on day 10, just the player needs to be reset
		} else {
			fullPlayerReset(db)
			dbSave(db)
			console.log('reset player')
			return gameDatabase
		}

	//otherwise, use the existing database
	} else {
		console.log('using existing database')
		return gameDatabase
	}
}
module.exports = determineSave