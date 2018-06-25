const dbLoad = require('../Helpers/dbLoader')
const buttonFactory = require('../DOM/buttonFactory')
const attachEventEventHandler = require('./attachEventEventHandler')

//this is an intermediary function that can probably be refactored out in future versions. It builds a button for the passed event array index and attaches the correct handler.
const buildEventButtons = (type, arrIndices) => {
	const db = dbLoad()
	const eventType = db.Events[type]

	arrIndices.forEach(index => {
		const event = db.Events[type][index]
		buttonFactory(`${event.name}`, 'button', `${type}${index}`, `${type}Controls` )
		attachEventEventHandler(`${type}${index}`, `${type}`, `${index}`)
	})
}

module.exports = buildEventButtons