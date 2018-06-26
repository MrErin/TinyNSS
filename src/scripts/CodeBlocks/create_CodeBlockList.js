const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buildRandomArray = require('../Helpers/buildRandomArray')
const cblSave = require('./codeBlockListSave')

//this function builds a randomized array of code block IDs that might be served when the user attempts a code block. it is called at the start of every day.
const create_CodeBlockList = (today) => {

	const db = dbLoad()
	const CodeBlocks = db.CodeBlocks
	let codeBlockList = []
	let tomorrowBlocks = []

	//the code block list that is built each day contains the following code blocks:
	//1. all code blocks for today
	//2. all code blocks for yesterday
	//3. one random code block from tomorrow

	CodeBlocks.forEach(codeBlock => {
		if (codeBlock.dayNumber === today || codeBlock.dayNumber === (today - 1)){
			codeBlockList.push(codeBlock.codeId)
		} else if (codeBlock.dayNumber === (today + 1)) {
			tomorrowBlocks.push(codeBlock.codeId)
		}
	})


	if (today < 10) {
		//(working from inside out:)
		//1. get a random number between 0 and the length of tomorrow's block list plus one (because of the min/max rules)
		//2. That number is the index position of a randomly chosen code block object from tomorrow.
		//3. Add the object at that randomly chosen index to the list of possible code blocks for today.
		codeBlockList.push(tomorrowBlocks[getRandomNumber(0, (tomorrowBlocks.length))])
	}

	//this returns a randomized array of eligible codeBlockIDs, not the objects themselves.
	const randomizedCodeBlocks = buildRandomArray(codeBlockList)

	cblSave(randomizedCodeBlocks)
}

module.exports = create_CodeBlockList