const $ = require ('jquery')
const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

let historyUniqueKey = 1

//this function is used to add a message to the history section. This builds the card upon which all other messages are based. If you only have one thing to say, use this function to say it.
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
		'historyHeader level'
	)
	apnd(card, historyHeader)

	const historyIconDiv = componentFactory(
		'div',
		'',
		`HistoryHeaderIcon${keyId}`,
		'historyIcon card-header-icon, is-one-fifth, level-left'
	)
	apnd(historyHeader, historyIconDiv)

	const historyIcon = componentFactory(
		'i',
		'',
		'',
		`${icon} is-size-2 level-item`
	)
	apnd(historyIconDiv, historyIcon)
	const historyTitle = componentFactory(
		'div',
		cardTitle,
		'',
		'historyTitle card-header-title column is-size-4'
	)
	apnd(historyHeader, historyTitle)
	if(startText !== '') {


		const contentWrap = componentFactory(
			'div',
			'',
			`HistoryContentWrap${keyId}`,
			''
		)
		apnd(card, contentWrap)
		const startTextWrap = componentFactory(
			'div',
			'',
			`HistoryStartTextContentWrap${keyId}`,
			'columns'
		)
		apnd(contentWrap, startTextWrap)
		const startTextBox = componentFactory(
			'div',
			startText,
			'',
			'column is-three-fifths is-offset-one-fifth'
		)
		apnd(startTextWrap, startTextBox)
		const effectsWrap = componentFactory(
			'div',
			'',
			`HistoryEffectsWrap${keyId}`,
			'columns content'
		)
		apnd(card, effectsWrap)
		const effectList = componentFactory(
			'ul',
			'',
			`historyEffects${keyId}`,
			'historyEffects column is-three-fifths is-offset-one-fifth'
		)
		apnd(effectsWrap, effectList)
	}

	$($(frag)).prependTo($('#History'))

	historyUniqueKey++
}

module.exports = addHistory