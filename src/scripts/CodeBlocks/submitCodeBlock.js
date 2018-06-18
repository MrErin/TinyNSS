const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const $ = require('jquery')
const startTime = require('../Time/startTime')

const submitCodeBlock = (complication) => {
	const db = dbLoad()
	const PC = db.Player

	if (complication === 'correct'){
		PC.confidence += 0.5
	} else if (complication === 'timid'){
		PC.confidence += 1.5
	} else if (complication === 'delusional'){
		PC.confidence += -1.5
	} else {
		console.log(`What the frak? You passed ${complication} as the code complication from the CodeBlocks/submitCodeBlock module.`)
	}

	dbSave(db)
	updateAllBars()
	$('#modalCanvas').removeClass('is-active')
	startTime()
}

module.exports = submitCodeBlock