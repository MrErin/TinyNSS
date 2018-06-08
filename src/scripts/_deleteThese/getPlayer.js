const getGame = require('./getGame')

//check if player iexists if so return existing, otherwise return new

const getPlayer = characterName => {

	if (typeof player === 'undefined') {
		getGame(characterName)

		const player = Object.create(
			{},
			{
				name: {
					value: characterName,
					enumerable: true
				},
				workPoints: {
					value: 0,
					writable: true,
					enumerable: true
				},
				confidence: {
					value: 0,
					writable: true,
					enumerable: true
				},
				energy: {
					value: 0,
					writable: true,
					enumerable: true
				},
				hunger: {
					value: 100,
					writable: true,
					enumerable: true
				},
				social: {
					value: 0,
					writable: true,
					enumerable: true
				},
				fun: {
					value: 0,
					writable: true,
					enumerable: true
				}
			}

		)
		return player

	 } else {
		return player
	}
}

module.exports = getPlayer