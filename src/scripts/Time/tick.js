const dbLoad = require('../Helpers/dbLoader')
const needCheck = require('./needCheck')
const addHistory = require('../DOM/addHistory')
const updateBar = require('../DOM/updateBar')
const dbSave = require('../Helpers/dbSaver')


const tick = () => {
	let tickCounter = 1
	const db = dbLoad()
	let PC = db.Player
	const hungerDecay = db.Game.hungerDecayRate

	if (needCheck('hunger')) {
		PC.hunger += hungerDecay
		PC.isNew = false
		dbSave(db)
		updateBar('hunger')

	} else {
		clearInterval(ticker)
	}
	addHistory(`Every tick, the PC should lose ${hungerDecay} from hunger. There have been ${tickCounter} ticks. Current PC hunger is ${PC.hunger} out of 100.`)
	tickCounter++
}

module.exports = tick
