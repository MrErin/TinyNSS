const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const codeBlockTextDisplay = require('./codeBlockTextDisplay')
const $ = require('jquery')
const addHistoryDetails = require('../DOM/addHistoryDetails')
const addHistoryEffectList = require('../DOM/addHistoryEffectList')
const updateStats = require('../PlayerStats/updateStats')

//this function is called when the "Ask for help" button is clicked
const askForHelpEventHandler = (codeId, complication) => {
	const db = dbLoad()

	//get a random instructor
	const instructor = db.Instructors[getRandomNumber(0, db.Instructors.length)]
	const PC = db.Player

	//there is a 1 in 4 chance the instructor will give a thumbs-up
	let thumbsUpNum = getRandomNumber(1,5)

	if (complication !== 'correct'){

		//display the correct version of the code block and disable the ask for help button
		codeBlockTextDisplay(codeId, 'correct')
		$('#askForHelp').prop('disabled', true)

		if (thumbsUpNum === 2){

			//if a thumbs-up is given, update the player's confidence and social, and add the messages notifying the player what has happened.
			updateStats('confidence', PC.confidence, instructor.thumbsUpValue)
			updateStats('social', PC.social, 10)
			$('#complicationBanner').text(`${instructor.name} helped you out and gave you a thumbs up! What a confidence boost!`).removeClass(`${complication}Flag`).addClass('instructorFlag correctFlag')
			addHistoryDetails(`${instructor.name} helped you out and gave you a thumbs up! What a confidence boost!`, 'far fa-thumbs-up', 'buff', `CodeBlock${codeId}`)
			addHistoryEffectList(`Thumbs Up Confidence Boost: +${instructor.thumbsUpValue}`, `CodeBlock${codeId}`)

		} else {

			//if no thumbs-up, notify the player that they received help.
			$('#complicationBanner').text(`${instructor.name} helped you out!`).removeClass(`${complication}Flag`).addClass('instructorFlag correctFlag')
			addHistoryDetails(`${instructor.name} helped you out!`, 'far fa-smile-wink', 'buff', `CodeBlock${codeId}`)
		}
	}
}

module.exports = askForHelpEventHandler