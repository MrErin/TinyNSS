const IDGen = Object.create(
	{},
	{
		current: {
			value: 1,
			writable: true,
			enumerable: true,
		},
		save: {
			value: function() {
				localStorage.setItem('IDGen', JSON.stringify(this.current))
			},
		},
		load: {
			value: function() {
				if (localStorage.getItem('IDGen') !== null) {
					this.current = JSON.parse(localStorage.getItem('IDGen'))
				}
			},
		},
	}
)

module.exports = IDGen
