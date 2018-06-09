const gameDatabase = require('./gameDatabase')
const initializeDatabase = require('./initializeDatabase')
const initializeEvents = require('./evt_initializeEvents')
const objectLength = require('../Helpers/objectLength')


const determineSave = () => {
	gameDatabase.load()
	if (gameDatabase.entities === null) {
		gameDatabase.entities = {}
		initializeDatabase()
		initializeEvents()
		gameDatabase.save()
	} else if (objectLength(gameDatabase.entities) < 3) {
		gameDatabase.entities = {}
		initializeDatabase()
		initializeEvents()
		gameDatabase.save()
	} else {
		gameDatabase.save()
	}
}
module.exports = determineSave
