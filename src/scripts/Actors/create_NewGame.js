const gameDatabase = require('./create_GameDatabase')
const create_EventsTables = require('./create_EventsTables')


const create_NewGame = gameName => {
	const game = Object.create(
		{},
		{
			gameName: {
				value: `${gameName}_game`,
				writable: false,
				enumerable: true,
			},
			confidenceDecayRate: {
				value: -0.001,
				writable: true,
				enumerable: true,
			},
			hungerDecayRate: {
				value: -10,
				writable: true,
				enumerable: true,
			},
			socialDecayRate: {
				value: -3,
				writable: true,
				enumerable: true,
			},
			funDecayRate: {
				value: -1,
				writable: true,
				enumerable: true,
			},
		}
	)

	// create key in game database
	const entityUID = 'Game'
	gameDatabase.entities[entityUID] = game
	gameDatabase.entities.Events = []
	create_EventsTables()
	gameDatabase.save()
	return entityUID
}

module.exports = create_NewGame
