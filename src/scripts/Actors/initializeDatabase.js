const create_PlayerCharacter = require('./create_PlayerCharacter')


//todo: When out of testing phase, uncomment the below code and/or improve the look so it's more polished.

const initializeDatabase = () => {
	// const characterName = prompt('What\'s your name?')
	// create_PlayerCharacter(characterName)

	create_PlayerCharacter('Erin')
}

module.exports = initializeDatabase
