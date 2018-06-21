const $ = require('jquery')
const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

let historyUniqueKey = 1

const create_HistoryCard = (cardTitle, startText, icon, idNum) => {

	// const card = componentFactory('section', '', `History${keyId}`, 'history card')
	// apnd(frag, card)
	// const historyHeader = componentFactory('div', '', `HistoryHeader${keyId}`, 'historyHeader level')
	// apnd(card, historyHeader)
	const historyIconDiv = componentFactory('div', '', `HistoryHeaderIcon${keyId}`, 'historyIcon card-header-icon is-one-fifth level-left')
	apnd(historyHeader, historyIconDiv)
	// const historyIcon = componentFactory('i', '', '', `${icon} is-size-1 level-item`)
	// apnd(historyIconDiv, historyIcon)
	const historyTitleDiv = componentFactory('div', headerTitle, '', 'historyTitle column is-size-3 card-header-title')
	apnd(historyHeader, historyTitleDiv)
	if (content !== '') {
		const contentDiv = componentFactory('section', '', `HistoryContent${keyId}`, 'historySection card-content')
		apnd(card, contentDiv)
		const contentText = componentFactory('p', content, '', 'historyText')
		apnd(contentDiv, contentText)
		const effectList = componentFactory('ul', '', `historyEffects${keyId}`, 'historyEffects')
		apnd(contentDiv, effectList)
	}
	$($(frag)).prependTo($('#History'))

	historyUniqueKey++
}

module.exports = create_HistoryCard