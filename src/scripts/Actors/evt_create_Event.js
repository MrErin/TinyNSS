const gameDatabase = require('./gameDatabase')

const create_Event = (
	name,
	text,
	energyChangeValue,
	workPointValue,
	confidenceChangeValue,
	hungerChangeValue,
	socialChangeValue,
	funChangeValue
) => {
	const event = Object.create(
		{},
		{
			name: {
				value: name,
				enumerable: true,
			},
			eventText: {
				value: text,
				enumerable: true,
			},
			energyChangeValue: {
				value: energyChangeValue,
				enumerable: true,
			},
			workPointValue: {
				value: workPointValue,
				enumerable: true,
			},
			confidenceChangeValue: {
				value: confidenceChangeValue,
				enumerable: true,
			},
			hungerChangeValue: {
				value: hungerChangeValue,
				enumerable: true,
			},
			socialChangeValue: {
				value: socialChangeValue,
				enumerable: true,
			},
			funChangeValue: {
				value: funChangeValue,
				enumerable: true,
			},
		}
	)

	gameDatabase.entities.Events.push(event)
	gameDatabase.save()
}

module.exports = create_Event
