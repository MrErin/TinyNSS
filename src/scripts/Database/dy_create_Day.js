const gameDatabase = require('./create_GameDatabase')

const create_Day = (dayNumber, dayStartText) => {
	const day = Object.create(
		{},
		{
			dayNumber: {
				value: dayNumber,
				enumerable: true
			},
			dayStartText: {
				value: dayStartText,
				enumerable: true
			}
		})

	const db = gameDatabase.entities
	db.Days.push(day)
	gameDatabase.save()
}

module.exports = create_Day