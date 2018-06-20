const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

const addHistoryDetails = (detail, sectionId) => {
	const parent = document.getElementById(sectionId)
	const text = componentFactory('p', detail, '', 'historyText')
	apnd(parent, text)
}

module.exports = addHistoryDetails