const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const $ = require('jquery')
const startTime = require('../Time/startTime')
const pauseTime = require('../Time/pauseTime')
const addHistory = require('../DOM/addHistory')

const submitCodeBlock = (complication) => {
	const db = dbLoad()
	const PC = db.Player

	if (complication === 'correct'){
		PC.confidence += 0.5
		PC.workPoints += 20
	} else if (complication === 'timid'){
		PC.confidence += 1.5
		PC.workPoints += 30
	} else if (complication === 'delusional'){
		PC.confidence += -1.5
		PC.workPoints += 25
	} else {
		console.log(`What the frak? You passed ${complication} as the code complication from the CodeBlocks/submitCodeBlock module.`)
	}
	addHistory(`${PC.name} finished a code block. Great work!`)

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