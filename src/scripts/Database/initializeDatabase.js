const create_PlayerCharacter = require('./create_PlayerCharacter')
const dbLoad = require('../Helpers/dbLoader')

//this function builds or rebuilds the database, including asking for the player's name
const initializeDatabase = () => {
	const db = dbLoad()
	const oldName = ''

	if(db !== null) {
		oldName = db.Player.name
	}

	const characterName = prompt('What\'s your name?', oldName)
	create_PlayerCharacter(characterName)
	console.log('created new character in Initialize Database')
}

module.exports = initializeDatabase
