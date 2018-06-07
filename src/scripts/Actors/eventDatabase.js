const eventDatabase = Object.create(
	{},
	{
		entities: {
			value: {},
			writable: true,
			enumerable: true,
		},
		save: {
			value: function() {
				const eventData = JSON.stringify(this.entities)
				localStorage.setItem('Events', eventData)
			},
		},
		load: {
			value: function() {
				const eventData = localStorage.getItem('Events')
				return JSON.parse(eventData)
			},
		},
	}
)

module.exports = eventDatabase
