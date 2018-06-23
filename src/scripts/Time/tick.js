const dbLoad = require('../Helpers/dbLoader')
const deathCheck = require('../PlayerStats/deathCheck')
const updateAllBars = require('../DOM/updateAllBars')
const dbSave = require('../Helpers/dbSaver')
const updateStats = require('../PlayerStats/updateStats')

let tickCounter = 0

const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate
	const socialDecay = db.Game.socialDecayRate
	const funDecay = db.Game.funDecayRate
	const confidenceDecay = db.Game.confidenceDecayRate

	// if (deathCheck('energy', PC.energy, 10)) {
	// 	if (deathCheck('hunger', PC.hunger, 0)) {
	// PC.isNew = false
	updateStats('hunger', PC.hunger, hungerDecay)
	// PC.hunger += hungerDecay
	updateStats('social', PC.social, socialDecay)
	// PC.social += socialDecay
	updateStats('fun', PC.fun, funDecay)
	// PC.fun += funDecay
	updateStats('confidence', PC.confidence, confidenceDecay)
	// PC.confidence += confidenceDecay
	// 	dbSave(db)
	// 	updateAllBars()
	// }
	// }
	console.log(`tick ${tickCounter}`)
	tickCounter++
}

module.exports = tick
