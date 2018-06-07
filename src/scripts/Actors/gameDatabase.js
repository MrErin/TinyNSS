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
				localStorage.setItem('GameDatabase', gameData)
			},
		},
		load: {
			value: function() {
				const gameData = localStorage.getItem('GameDatabase')
				return JSON.parse(gameData)
			},
		},
	}
)

module.exports = gameDatabase
