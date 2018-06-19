const cblLoad = require('./codeBlockListLoad')
const cblSave = require('./codeBlockListSave')
const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const needCheck = require('../Time/needCheck')
const wellnessCheck = require('./wellnessCheck')
const displayCodeBlock = require('./displayCodeBlock')
const updateAllBars = require('../DOM/updateAllBars')
const deathCheck = require('../Time/deathCheck')
const pauseTime = require('../Time/pauseTime')


const startCodeBlockEventHandler = () => {
	const db = dbLoad()
	const cbl = cblLoad()
	const thisBlock = cbl.pop()
	// console.log('This block is', thisBlock)
	const Game = db.Game
	const PC = db.Player
	let dayMessage = ''
	let dayBanner = ''
	const codeBlockTitle = thisBlock.blockTitle
	let codeBlockVersion = ''
	let complicationBanner = ''
	let complicationMessage = ''
	const minEnergy = ((Game.energyPerCodeBlock * -1) - 1)
	PC.isNew = false
	let correctCode = ''
	correctCode = thisBlock.correctCode
	// console.log('correct code', correctCode)
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
		codeBlockVersion = thisBlock.timidBlock
		complicationMessage = 'You\'re feeling timid right now. You might want to ask for help.'
		complicationBanner = 'timid'
		break
	case 5:
	case 6:
	case 7:
	case 8:
		codeBlockVersion = thisBlock.correctBlock
		complicationMessage = ''
		complicationBanner = 'correct'
		break
	case 9:
	case 10:
		codeBlockVersion = thisBlock.delusionalBlock
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
			displayCodeBlock(codeBlockVersion, codeBlockTitle, complicationBanner, complicationMessage, dayBanner, dayMessage, correctCode, language)
			PC.energy += Game.energyPerCodeBlock
			cblSave(cbl)
			dbSave(db)
			updateAllBars()
		}
	}
}

module.exports = startCodeBlockEventHandler