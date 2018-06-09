const gameDatabase = require('./gameDatabase')

const create_EventsTables = () => {
	const table = Object.create(
		{},
		{
			food: {
				value: [],
				enumerable: true,
				writable: true
			},
			meetups: {
				value: [],
				enumerable: true,
				writable: true
			},
			parties: {
				value: [],
				enumerable: true,
				writable: true
			}
		}
	)
	let entityUID = 'Events'
	gameDatabase.entities[entityUID] = table
	gameDatabase.save()
	return entityUID
}

module.exports = create_EventsTables