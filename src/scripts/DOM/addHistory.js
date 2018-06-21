const $ = require ('jquery')
const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

let historyUniqueKey = 1

const addHistory = (cardTitle, startText, icon, idNum) => {
	const frag = document.createDocumentFragment()

	//creating logic that will allow multiple history messages to attach to the same card in this function. If no ID is passed, use the default ID from the counter variable
	let keyId = ''

	if(idNum !== 0){
		keyId = idNum
	} else {
		keyId = historyUniqueKey
	}


	//component factory: type, contents, id, classes
	const card = componentFactory(
		'section',
		'',
		`History${keyId}`,
		'history card'
	)
	apnd(frag, card)
	const historyHeader = componentFactory(
		'div',
		'',
		`HistoryHeader${keyId}`,
		'historyHeader'
	)
	apnd(card, historyHeader)
	const historyIcon = componentFactory(
		'i',
		'',
		'',
		`${icon} is-size-1`
	)
	apnd(historyHeader, historyIcon)
	const historyTitle = componentFactory(
		'div',
		cardTitle,
		'',
		'historyTitle card-header-title'

	)






	$($(frag)).prependTo($('#History'))

	historyUniqueKey++
}

module.exports = addHistory