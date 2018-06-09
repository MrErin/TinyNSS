const gameDatabase = require('../Actors/gameDatabase')
const needCheck = require('./needCheck')
const tickCheck = require('./tickCheck')
const addHistory = require('../DOM/addHistory')
const updateBar = require('../DOM/updateBar')

let tickCounter = 1

const tick = () => {
	let PC = gameDatabase.entities.Player
	const hungerDecay = gameDatabase.entities.Game.hungerDecayRate

	if (needCheck('hunger')) {
		PC.hunger += hungerDecay
		updateBar('hunger', hungerDecay)

	} else {
		clearInterval(ticker)
	}
	addHistory(`Every tick, the PC should lose ${hungerDecay} from hunger. There have been ${tickCounter} ticks. Current PC hunger is ${PC.hunger} out of 100.`)
	tickCounter++
}

module.exports = tick
