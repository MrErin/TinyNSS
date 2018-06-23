const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const dbSave = require('../Helpers/dbSaver')
const updateAllBars = require('../DOM/updateAllBars')
const codeBlockTextDisplay = require('./codeBlockTextDisplay')
const $ = require('jquery')
const addHistoryDetails = require('../DOM/addHistoryDetails')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')

const askForHelpEventHandler = (codeId, complication) => {
	const db = dbLoad()
	const instructor = db.Instructors[getRandomNumber(0, db.Instructors.length)]
	const PC = db.Player
	let thumbsUpNum = getRandomNumber(1,5)


	if (complication !== 'correct'){
		codeBlockTextDisplay(codeId, 'correct')
		$('#askForHelp').prop('disabled', true)

		if (thumbsUpNum === 2){
			PC.confidence += instructor.thumbsUpValue
			PC.social += 10
			$('#complicationBanner').text(`${instructor.name} helped you out and gave you a thumbs up! What a confidence boost!`).removeClass(`${complication}Flag`).addClass('instructorFlag correctFlag')
			addHistoryDetails(`${instructor.name} helped you out and gave you a thumbs up! What a confidence boost!`, 'far fa-thumbs-up', 'buff', `CodeBlock${codeId}`)
			addHistoryEffectList(`Thumbs Up Confidence Boost: +${instructor.thumbsUpValue}`, `CodeBlock${codeId}`)

		} else {
			$('#complicationBanner').text(`${instructor.name} helped you out!`).removeClass(`${complication}Flag`).addClass('instructorFlag correctFlag')
			addHistoryDetails(`${instructor.name} helped you out!`, 'far fa-smile-wink', 'buff', `HistoryContentCodeBlock${codeId}`)
		}
	}
	dbSave(db)
	updateAllBars()

}

module.exports = askForHelpEventHandler