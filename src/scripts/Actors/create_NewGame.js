const gameDatabase = require('./gameDatabase')
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
				value: 0,
				writable: true,
				enumerable: true,
			},
			hungerDecayRate: {
				value: -10,
				writable: true,
				enumerable: true,
			},
			socialDecayRate: {
				value: 0,
				writable: true,
				enumerable: true,
			},
			funDecayRate: {
				value: 0,
				writable: true,
				enumerable: true,
			},
		}
	)

	// create key in game database
	let entityUID = 'Game'
	gameDatabase.entities[entityUID] = game
	create_EventsTables()
	gameDatabase.save()
	return entityUID
}

module.exports = create_NewGame
