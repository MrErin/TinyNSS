const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const $ = require('jquery')
const startTime = require('../Time/startTime')
const pauseTime = require('../Time/pauseTime')
const addHistory = require('../DOM/addHistory')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')

const submitCodeBlock = (complication, codeId) => {
	const db = dbLoad()
	const PC = db.Player

	addHistory('Code block submitted!', `${PC.name} finished a code block. Great work!`, 'fas fa-code historyIcon', `historyEffectsCodeBlock${codeId}`)

	if (complication === 'correct'){
		PC.confidence += 0.5
		PC.workPoints += 20
		addHistoryEffectList('Confidence: + 0.5', `historyEffectsCodeBlock${codeId}`)
		addHistoryEffectList('Work Points: + 20', `historyEffectsCodeBlock${codeId}`)
	} else if (complication === 'timid'){
		PC.confidence += 1.5
		PC.workPoints += 30
		addHistoryEffectList('You were so timid! Confidence boost of: + 1.5', `historyEffectsCodeBlock${codeId}`)
		addHistoryEffectList('Extra credit for solving a tough problem! Work Points: + 30', `historyEffectsCodeBlock${codeId}`)
	} else if (complication === 'delusional'){
		PC.confidence += -1.5
		PC.workPoints += 25
		addHistoryEffectList('Your confidence was too high. You\'re a little less delusional now. Confidence: -1.5', `historyEffectsCodeBlock${codeId}`)
		addHistoryEffectList('Extra credit for working with too much confidence! Work Points: + 25', `historyEffectsCodeBlock${codeId}`)
	} else {
		console.log(`What the frak? You passed ${complication} as the code complication from the CodeBlocks/submitCodeBlock module.`)
	}

	dbSave(db)
	updateAllBars()
	$('#playerInput').val('')
	$('#modalCanvas').removeClass('is-active')
	const buildStartCodeBlockButton = require('./buildStartCodeBlockButton')
	buildStartCodeBlockButton()
	pauseTime(ticker)
	startTime()
}

module.exports = submitCodeBlock