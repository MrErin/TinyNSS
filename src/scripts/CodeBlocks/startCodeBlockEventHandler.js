const cblLoad = require('./codeBlockListLoad')
const cblSave = require('./codeBlockListSave')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const needCheck = require('../PlayerStats/needCheck')
const wellnessCheck = require('../PlayerStats/wellnessCheck')
const displayCodeBlock = require('./displayCodeBlock')
const updateAllBars = require('../DOM/updateAllBars')
const deathCheck = require('../PlayerStats/deathCheck')
const pauseTime = require('../Time/pauseTime')
const addHistory = require('../DOM/addHistory')
const $ = require('jquery')


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
	const minEnergy = ((Game.energyPerCodeBlock * -1) - 1)
	PC.isNew = false
	let correctCode = ''
	correctCode = thisBlock.correctCode
	const language = thisBlock.blockLanguage

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
		console.log(`Something is wrong. You fed me a confidence of ${PC.confidence}`)
		break
	}

	if (deathCheck('hunger', PC.hunger, 0)){
		if (((needCheck('energy', PC.energy, minEnergy, 10000)) === true) && ((wellnessCheck(PC.hunger, PC.social, PC.fun)) === true)) {
			pauseTime(ticker)
			displayCodeBlock(thisBlock.codeId, codeBlockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language)
			PC.energy += Game.energyPerCodeBlock
			cblSave(cbl)
			dbSave(db)
			updateAllBars()
		}
	}
	addHistory('Code Block Attempt', `${PC.name} finished a code block. Great work!`, 'fas fa-code historyIcon', `CodeBlock${thisBlock.codeId}`)
	$(`#HistoryCodeBlock${thisBlock.codeId}`).hide()

}

module.exports = startCodeBlockEventHandler