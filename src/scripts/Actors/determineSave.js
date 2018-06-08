const gameDatabase = require('./gameDatabase')
const initializeDatabase = require('./initializeDatabase')
const initializeEvents = require('./evt_initializeEvents')

const Objectlength = object => {
	let length = 0
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			++length
		}
	}
	return length
}

const determineSave = () => {
	gameDatabase.load()
	if (gameDatabase.entities === null) {
		gameDatabase.entities = {}
		initializeDatabase()
		initializeEvents()
		gameDatabase.save()
	} else if (Objectlength(gameDatabase.entities) < 2) {
		gameDatabase.entities = {}
		initializeDatabase()
		initializeEvents()
		gameDatabase.save()
	} else {
		gameDatabase.save()
	}
}
module.exports = determineSave
