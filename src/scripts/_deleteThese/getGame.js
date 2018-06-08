const getGame = gameName => {


	if (typeof game === 'undefined') {
		const game = Object.create(
			{},
			{
				gameName: {
					value: `${gameName}_game`,
					writable: false,
					enumerable: true
				},
				confidenceDecayRate: {
					value: 0,
					writable: true,
					enumerable: true
				},
				hungerDecayRate: {
					value: -10,
					writable: true,
					enumerable: true
				},
				socialDecayRate: {
					value: 0,
					writable: true,
					enumerable: true
				},
				funDecayRate: {
					value: 0,
					writable: true,
					enumerable: true
				}
			}
		)
		return game
	} else {
		return game
	}
}

module.exports = getGame