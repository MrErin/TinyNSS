const gameDatabase = require('./create_GameDatabase')
const create_NewGame = require('./create_NewGame')


const create_PlayerCharacter = characterName => {
	// create game difficulty object to set need decay rates
	create_NewGame(characterName)

	const player = Object.create(
		{},
		{
			name: {
				value: characterName,
				enumerable: true,
			},
			isNew: {
				value: true,
				enumerable: true,
				writable: true
			},
			workPoints: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			confidence: {
				value: 6,
				writable: true,
				enumerable: true,
			},
			energy: {
				value: 100,
				writable: true,
				enumerable: true,
			},
			hunger: {
				value: 100,
				writable: true,
				enumerable: true,
			},
			social: {
				value: 100,
				writable: true,
				enumerable: true,
			},
			fun: {
				value: 100,
				writable: true,
				enumerable: true,
			},
		}
	)

	// create key in database
	const entityUID = 'Player'
	gameDatabase.entities[entityUID] = player
	gameDatabase.save()
	return entityUID
}

module.exports = create_PlayerCharacter
