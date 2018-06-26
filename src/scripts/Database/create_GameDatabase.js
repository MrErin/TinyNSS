const gameDatabase = Object.create(
	{},
	{
		entities: {
			value: {},
			writable: true,
			enumerable: true,
		},
		save: {
			value: function() {
				const gameData = JSON.stringify(this.entities)
				sessionStorage.setItem('GameDatabase', gameData)
			},
		},
		load: {
			value: function() {
				const gameData = sessionStorage.getItem('GameDatabase')
				return JSON.parse(gameData)
			}
		},
	}
)

module.exports = gameDatabase