const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buildRandomArray = require('../Helpers/buildRandomArray')
const cblSave = require('./codeBlockListSave')

const create_CodeBlockList = (today) => {

	const db = dbLoad()
	const CodeBlocks = db.CodeBlocks
	let codeBlockList = []
	let tomorrowBlocks = []

	CodeBlocks.forEach(codeBlock => {
		if (codeBlock.dayNumber === today || codeBlock.dayNumber === (today - 1)){
			codeBlockList.push(codeBlock)
		} else if (codeBlock.dayNumber === (today + 1)) {
			tomorrowBlocks.push(codeBlock)
		}
	})

	//(working from inside out:)
	//1. get a random number between 0 and the length of tomorrow's block list plus one (because of the min/max rules)
	//2. That number is the index position of a randomly chosen code block object from tomorrow.
	//3. Add the object at that randomly chosen index to the list of possible code blocks for today.
	codeBlockList.push(tomorrowBlocks[getRandomNumber(0, (tomorrowBlocks.length))])

	//this returns a randomized array of eligible codeBlock objects
	const randomizedCodeBlocks = buildRandomArray(codeBlockList)

	cblSave(randomizedCodeBlocks)
}

module.exports = create_CodeBlockList