const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

const addHistoryEffectList = (itemContent, keyId) => {
	const parentList = document.getElementById(`historyEffects${keyId}`)
	const listElement = componentFactory('li', '', '', 'historyEffectListItem')
	listElement.appendChild(document.createTextNode(itemContent))
	apnd(parentList, listElement)
}

module.exports = addHistoryEffectList