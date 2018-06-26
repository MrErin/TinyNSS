const dbLoad = require('../Helpers/dbLoader')
const updateStats = require('../PlayerStats/updateStats')
const calcConfidence = require('../PlayerStats/calcConfidence')
const $ = require('jquery')

//this function runs every two seconds while time is unpaused during the game. It steadily decays the character's needs and draws confidence towards optimum.
const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate
	const socialDecay = db.Game.socialDecayRate
	const funDecay = db.Game.funDecayRate
	const confidenceDecay = db.Game.confidenceDecayRate

	updateStats('hunger', PC.hunger, hungerDecay)
	updateStats('social', PC.social, socialDecay)
	updateStats('fun', PC.fun, funDecay)
	const confidenceAdjustment = calcConfidence(PC.confidence)
	updateStats('confidence', PC.confidence, (confidenceDecay * confidenceAdjustment))
	$('#graphics > img:first').next().appendTo('#graphics')
}

module.exports = tick


// $('#graphics > div:gt(0)').hide()
// 	setInterval(function() {
// 	  $('#graphics > div:first')
// 			.fadeOut(1000)
// 			.next()
// 			.fadeIn(1000)
// 			.end()
// 			.appendTo('#graphics')
// 	},  3000)


// 	$( "li.third-item" ).next().css( "background-color", "red" );