const dbLoad = require('../Helpers/dbLoader')
const deathCheck = require('./deathCheck')
const updateAllBars = require('../DOM/updateAllBars')
const dbSave = require('../Helpers/dbSaver')

const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate
	const socialDecay = db.Game.socialDecayRate
	const funDecay = db.Game.funDecayRate
	const confidenceDecay = db.Game.confidenceDecayRate

	if (deathCheck('energy', PC.energy, 10)) {
		if (deathCheck('hunger', PC.hunger, 0)) {
			PC.isNew = false
			PC.hunger += hungerDecay
			PC.social += socialDecay
			PC.fun += funDecay
			PC.confidence += confidenceDecay
			dbSave(db)
			updateAllBars()
		}
	}
}

module.exports = tick
