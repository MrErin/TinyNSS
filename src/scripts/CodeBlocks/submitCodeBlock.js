const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const $ = require('jquery')
const startTime = require('../Time/startTime')
const pauseTime = require('../Time/pauseTime')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const updateStats = require('../PlayerStats/updateStats')

const submitCodeBlock = (complication, codeId) => {
	const db = dbLoad()
	const PC = db.Player

	// addHistory('Code block submitted!', `${PC.name} finished a code block. Great work!`, 'fas fa-code historyIcon', `CodeBlock${codeId}`)

	if (complication === 'correct'){
		updateStats('confidence', PC.confidence, 0.5)
		updateStats('coderPoints', PC.coderPoints, 20)
		// PC.confidence += 0.5
		// PC.coderPoints += 20
		addHistoryEffectList('Confidence: + 0.5', `CodeBlock${codeId}`)
		addHistoryEffectList('Coder Points: + 20', `CodeBlock${codeId}`)

	} else if (complication === 'timid'){
		updateStats('confidence', PC.confidence, 0.5)
		updateStats('coderPoints', PC.coderPoints, 30)

		// PC.confidence += 1.5
		// PC.coderPoints += 30
		addHistoryEffectList('You were so timid! Confidence boost of: + 0.5', `CodeBlock${codeId}`)
		addHistoryEffectList('Extra credit for solving a tough problem! Coder Points: + 30', `CodeBlock${codeId}`)
	} else if (complication === 'delusional'){
		updateStats('confidence', PC.confidence, -0.5)
		updateStats('coderPoints', PC.coderPoints, 25)
		// PC.confidence += -1.5
		// PC.coderPoints += 25
		addHistoryEffectList('Your confidence was too high. You\'re a little less delusional now. Confidence: -0.5', `CodeBlock${codeId}`)
		addHistoryEffectList('Extra credit for working with too much confidence! Coder Points: + 25', `CodeBlock${codeId}`)
	} else {
		console.log(`What the frak? You passed ${complication} as the code complication from the CodeBlocks/submitCodeBlock module.`)
	}

	// dbSave(db)
	// updateAllBars()
	$('#playerInput').val('')
	$(`#HistoryCodeBlock${codeId}`).show()
	$('#modalCanvas').removeClass('is-active')
	const buildStartCodeBlockButton = require('./buildStartCodeBlockButton')
	buildStartCodeBlockButton()
	pauseTime(ticker)
	startTime()

}

module.exports = submitCodeBlock