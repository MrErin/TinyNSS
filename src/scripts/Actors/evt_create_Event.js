const gameDatabase = require('./gameDatabase')

const create_Event = (
	eventType,
	name,
	eventStartText,
	energyBuffValue,
	workPointValue,
	confidenceBuffValue,
	hungerBuffValue,
	socialBuffValue,
	funBuffValue,
	buffText,
	debuffText,
	debuffHunger,
	debuffSocial,
	debuffFun,
	debuffConfidence
) => {
	const event = Object.create(
		{},
		{
			name: {
				value: name,
				enumerable: true,
			},
			eventStartText: {
				value: eventStartText,
				enumerable: true,
			},
			energyBuffValue: {
				value: energyBuffValue,
				enumerable: true,
			},
			workPointValue: {
				value: workPointValue,
				enumerable: true,
			},
			confidenceBuffValue: {
				value: confidenceBuffValue,
				enumerable: true,
			},
			hungerBuffValue: {
				value: hungerBuffValue,
				enumerable: true,
			},
			socialBuffValue: {
				value: socialBuffValue,
				enumerable: true,
			},
			funBuffValue: {
				value: funBuffValue,
				enumerable: true,
			},
			buffText: {
				value: buffText,
				enumerable: true
			},
			debuffText: {
				value: debuffText,
				enumerable: true
			},
			debuffValues: {
				enumerable: true,
				value: {
					debuffHunger: debuffHunger,
					debuffSocial: debuffSocial,
					debuffFun: debuffFun,
					debuffConfidence: debuffConfidence
				}
			}
		}
	)


	switch (eventType) {
	case 'food':
		gameDatabase.entities.Events.food.push(event)
		break
	case 'party':
		gameDatabase.entities.Events.parties.push(event)
		break
	case 'meetup':
		gameDatabase.entities.Events.meetups.push(event)
		break
	default:
		console.log(`Event ${name} not properly created.`)
	}
	gameDatabase.save()
}

module.exports = create_Event
