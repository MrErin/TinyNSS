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
				const IDGen = JSON.stringify(this.current)
				sessionStorage.setItem('IDGen', IDGen)
			},
		},
		load: {
			value: function() {
				const IDGen = sessionStorage.getItem('IDGen')
				return JSON.parse(IDGen)
			},
		},
	}
)

module.exports = IDGen
