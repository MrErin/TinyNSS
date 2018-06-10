const dbLoad = require('../Helpers/dbLoader')
const needCheck = require('./needCheck')
const addHistory = require('../DOM/addHistory')
const updateBar = require('../DOM/updateBar')
const dbSave = require('../Helpers/dbSaver')

let tickCounter = 1

const tick = () => {
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate

	if (needCheck('hunger')) {
		PC.hunger += hungerDecay
		updateBar('hunger')
		PC.isNew = false
		dbSave(db)

	} else {
		clearInterval(ticker)
	}
	addHistory(`Every tick, the PC should lose ${hungerDecay} from hunger. There have been ${tickCounter} ticks. Current PC hunger is ${PC.hunger} out of 100.`)
	tickCounter++
}

module.exports = tick
