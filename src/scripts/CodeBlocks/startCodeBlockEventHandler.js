const cblLoad = require('./codeBlockListLoad')
const cblSave = require('./codeBlockListSave')
const dbLoad = require('../Helpers/dbLoader')
const wellnessCheck = require('../PlayerStats/wellnessCheck')
const displayCodeBlock = require('./displayCodeBlock')
const pauseTime = require('../Time/pauseTime')
const addHistory = require('../DOM/addHistory')
const $ = require('jquery')
const updateStats = require('../PlayerStats/updateStats')

//this function exists to collect and process all information for the code block that will be displayed when the user clicks the "start code block" button. This information is sent to other functions, most likely the "displayCodeBlock" function.
const startCodeBlockEventHandler = () => {
	const db = dbLoad()
	const cbl = cblLoad()
	const blockId = cbl.pop()
	let thisBlock = ''

	db.CodeBlocks.forEach(block => {
		if (blockId === block.codeId){
			thisBlock = block
		}
	})
	const Game = db.Game
	const PC = db.Player
	let dayMessage = ''
	let dayBanner = ''
	const codeBlockTitle = thisBlock.blockTitle
	let complicationBanner = ''
	let complicationMessage = ''
	let correctCode = ''
	correctCode = thisBlock.correctCode
	const language = thisBlock.blockLanguage

	//set the day for the code block's day banner
	if(thisBlock.dayNumber === Game.currentDay){
		dayBanner = 'today'
		dayMessage = 'This is new code for today.'
	} else if (thisBlock.dayNumber === (Game.currentDay - 1)) {
		dayBanner = 'yesterday'
		dayMessage = 'This is a review of what we learned yesterday.'
	} else if (thisBlock.dayNumber === (Game.currentDay + 1)) {
		dayBanner = 'tomorrow'
		dayMessage = 'This is a preview of what we\'ll learn tomorrow.'
	}

	//!note: if making changes to these calculations, also need to change the similar switch statement in DOM/updateBar

	//set the complication for the code block's complication banner
	switch (Math.round(PC.confidence)) {
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		complicationMessage = 'You\'re feeling timid right now. You might want to ask for help.'
		complicationBanner = 'timid'
		break
	case 5:
	case 6:
	case 7:
	case 8:
		complicationMessage = ''
		complicationBanner = 'correct'
		break
	case 9:
	case 10:
		complicationMessage = 'You\'re feeling delusional right now. You might want to ask for help.'
		complicationBanner = 'delusional'
		break
	default:
		console.log(`Something is wrong. You fed the startCodeBlockEventHandler a confidence of ${PC.confidence}`)
		break
	}

	//check that the player has high enough stats and enough energy to attempt the code block
	if (wellnessCheck(PC.hunger, PC. social, PC.fun) === true) {
		if (updateStats('energy', PC.energy, Game.energyPerCodeBlock) === true) {
			pauseTime(ticker)
			displayCodeBlock(thisBlock.codeId, codeBlockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language)
			cblSave(cbl)
		}

		addHistory('Code Block Attempt', `${PC.name} finished a code block. Great work!`, 'fas fa-code historyIcon', `CodeBlock${thisBlock.codeId}`)
		$(`#HistoryCodeBlock${thisBlock.codeId}`).hide()
	}
}

module.exports = startCodeBlockEventHandler