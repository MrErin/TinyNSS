const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

//this function adds list items to the history card and is used exclusively to notify the player of line-item status changes such as "Confidence: +1"
const addHistoryEffectList = (itemContent, keyId) => {
	const parentList = document.getElementById(`historyEffects${keyId}`)
	const listElement = componentFactory('li', '', '', 'historyEffectListItem')
	listElement.appendChild(document.createTextNode(itemContent))
	apnd(parentList, listElement)
}

module.exports = addHistoryEffectList