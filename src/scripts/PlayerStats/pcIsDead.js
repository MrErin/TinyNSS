const addHistory = require('../DOM/addHistory')
const gameOver = require('../DOM/gameOver')

//this function handles everything that needs to happen if the character dies (I think starving is the only means of death ATM)
const pcIsDead = () => {
	gameOver()

	//notify the player
	addHistory('Game Over', 'You starved to death. Please try again. But, you know...eat next time.',
		'far fa-dizzy historyIcon', 0)
}

module.exports = pcIsDead