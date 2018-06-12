const $ = require('jquery')
const dbLoad = require('../Helpers/dbLoader')
const deathCheck = require('./deathCheck')
const updateAllBars = require('../DOM/updateAllBars')
const dbSave = require('../Helpers/dbSaver')
const nukeControlSection = require('../DOM/nukeControlSection')

let tickCounter = 1

const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate
	const socialDecay = db.Game.socialDecayRate
	const funDecay = db.Game.funDecayRate
	const confidenceDecay = db.Game.confidenceDecayRate


	if (deathCheck('hunger', PC.hunger, 0)) {
		PC.isNew = false
		PC.hunger += hungerDecay
		PC.social += socialDecay
		PC.fun += funDecay
		PC.confidence += confidenceDecay
		dbSave(db)
		updateAllBars()
	} else {
		clearInterval(ticker)
		//something to disable buttons
		$('#newDay').prop('disabled', true)
		$('#eatFood').prop('disabled', true)
		nukeControlSection('partiesControls')
		nukeControlSection('meetupsControls')
	}

	if ((deathCheck('energy', PC.energy, 10)) === false) {
		clearInterval(ticker)
	}
	tickCounter++
}

module.exports = tick
