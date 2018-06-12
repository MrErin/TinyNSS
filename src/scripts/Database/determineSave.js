const gameDatabase = require('./create_GameDatabase')
const dbSave = require('../Helpers/dbSaver')
const initializeDatabase = require('./initializeDatabase')
const objectLength = require('../Helpers/objectLength')
const fullPlayerReset = require('./fullPlayerReset')


const determineSave = () => {
	const db = gameDatabase.load()

	if (db === null || db === 'undefined' || typeof db !== 'object') {
		initializeDatabase()
		console.log('created new database A')
		gameDatabase.save()
	} else if (objectLength(db) < 3) {
		initializeDatabase()
		console.log('created new database B')
		gameDatabase.save()
	} else if (db.Player.isNew === false) {
		fullPlayerReset(db)
		dbSave(db)
		console.log('reset player')
		return gameDatabase
	} else {
		console.log('using existing database')
		return gameDatabase
	}
}
module.exports = determineSave
