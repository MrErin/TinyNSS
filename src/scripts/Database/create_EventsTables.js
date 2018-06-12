const gameDatabase = require('./create_GameDatabase')
const initializeEvents = require('./evt_initializeEvents')

const create_Events = () => {
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
	const entityUID = 'Events'
	gameDatabase.entities[entityUID] = table
	initializeEvents()
	gameDatabase.save()
	return entityUID
}

module.exports = create_Events