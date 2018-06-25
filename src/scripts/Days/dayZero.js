const dbLoad = require('../Helpers/dbLoader')
const create_CodeBlockList = require('../CodeBlocks/create_CodeBlockList')

const dayZero = () => {
	const db = dbLoad()

	create_CodeBlockList(db.Game.currentDay)
}

module.exports = dayZero