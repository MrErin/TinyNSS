const gameDatabase = require('../Actors/gameDatabase')
const needCheck = require('./needCheck')
const tickCheck = require('./tickCheck')

let tickCounter = 1

const tick = () => {
	let PC = gameDatabase.entities.Player
	const hungerDecay = gameDatabase.entities.Game.hungerDecayRate
	// cashew says possibly need to delete player and recreate somewhere in here
	if (needCheck('hunger')) {
		PC.hunger += hungerDecay
	} else {
		clearInterval(ticker)
	}
	console.log(
		`Every tick, the PC should lose ${hungerDecay} from hunger. There have been ${tickCounter} ticks. Current PC hunger is ${
			PC.hunger
		} out of 100.`
	)
	tickCounter++
}

module.exports = tick
