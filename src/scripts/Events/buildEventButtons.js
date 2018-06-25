const dbLoad = require('../Helpers/dbLoader')
const buttonFactory = require('../DOM/buttonFactory')
const attachEventEventHandler = require('./attachEventEventHandler')

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