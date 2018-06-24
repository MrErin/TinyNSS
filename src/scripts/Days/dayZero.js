const dbLoad = require('../Helpers/dbLoader')
const create_CodeBlockList = require('../CodeBlocks/create_CodeBlockList')

const dayZero = () => {
	const db = dbLoad()

	create_CodeBlockList(db.Game.currentDay)
	if(localStorage.getItem('tinyNSSScore') === null) {
		localStorage.setItem('tinyNSSScore', 0)
	}
	const currentScore = localStorage.getItem('tinyNSSScore')
	const scoreBox = document.getElementById('score')
	scoreBox.textContent = currentScore
}

module.exports = dayZero