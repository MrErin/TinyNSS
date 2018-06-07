const create_NewGame = require('./create_NewGame')
const gameDatabase = require('./gameDatabase')

const create_PlayerCharacter = characterName => {
	// create new game difficulty object to set need decay rates
	create_NewGame(characterName)

	const player = Object.create(
		{},
		{
			name: {
				value: characterName,
				enumerable: true,
			},
			workPoints: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			confidence: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			energy: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			hunger: {
				value: 100,
				writable: true,
				enumerable: true,
			},
			social: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			fun: {
				value: 0,
				writable: true,
				enumerable: true,
			},
		}
	)

	// create key in database
	let entityUID = 'Player'
	gameDatabase.entities[entityUID] = player
	gameDatabase.save()
	return entityUID
}

module.exports = create_PlayerCharacter
