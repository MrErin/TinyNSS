const gameDatabase = require('./create_GameDatabase')
const create_EventsTables = require('./create_EventsTables')
const initializeDays = require('./dy_initialize_Days')
const initializeCodeBlocks = require('./cb_initializeCodeBlocks')
const initializeInstructors = require('./inst_initializeInstructors')


const create_NewGame = gameName => {
	const game = Object.create(
		{},
		{
			gameName: {
				value: `${gameName}_game`,
				writable: false,
				enumerable: true,
			},
			//confidence decay should always be positive because the confidence adjustment function will determine whether confidence needs to go up or down.
			confidenceDecayRate: {
				value: 0.1,
				enumerable: true,
			},
			hungerDecayRate: {
				value: -1,
				enumerable: true,
			},
			socialDecayRate: {
				value: -3,
				enumerable: true,
			},
			funDecayRate: {
				value: -1,
				enumerable: true,
			},
			currentDay: {
				value: 0,
				writable: true,
				enumerable: true
			},
			energyPerCodeBlock: {
				value: -20,
				enumerable: true
			}
		}
	)

	const entityUID = 'Game'
	gameDatabase.entities[entityUID] = game
	gameDatabase.entities.Events = []
	create_EventsTables()
	gameDatabase.entities.Days = []
	initializeDays()
	gameDatabase.entities.Instructors = []
	initializeInstructors()
	gameDatabase.entities.CodeBlocks = []
	initializeCodeBlocks()
	gameDatabase.save()
	return entityUID
}

module.exports = create_NewGame