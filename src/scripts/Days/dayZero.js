const dbLoad = require('../Helpers/dbLoader')
const create_CodeBlockList = require('../CodeBlocks/create_CodeBlockList')

//this function is only run on page load to update the score and create the code block list for day 0
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