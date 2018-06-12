const dbLoad = require('../Helpers/dbLoader')
const deathCheck = require('./deathCheck')
const addHistory = require('../DOM/addHistory')
const updateAllBars = require('../DOM/updateAllBars')
const dbSave = require('../Helpers/dbSaver')

let tickCounter = 1

const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate
	const socialDecay = db.Game.socialDecayRate
	const funDecay = db.Game.funDecayRate
	const confidenceDecay = db.Game.confidenceDecayRate

	if (deathCheck('hunger', PC.hunger)) {
		PC.isNew = false
		PC.hunger += hungerDecay
		PC.social += socialDecay
		PC.fun += funDecay
		PC.confidence += confidenceDecay
		dbSave(db)
		updateAllBars()

	} else {
		clearInterval(ticker)
	}
	addHistory('tick')
	tickCounter++
}

module.exports = tick
