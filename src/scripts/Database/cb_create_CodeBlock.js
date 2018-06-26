const gameDatabase = require('./create_GameDatabase')

let idGen = 0
const create_CodeBlock = (blockLanguage, blockTitle, dayNumber, correctBlock, timidBlock, delusionalBlock, correctCode) => {
	const codeBlock = Object.create(
		{},
		{
			codeId: {
				value: idGen,
				enumerable: true
			},
			blockLanguage: {
				value: blockLanguage,
				enumerable: true
			},
			blockTitle: {
				value: blockTitle,
				enumerable: true
			},
			dayNumber: {
				value: dayNumber,
				enumerable: true
			},
			correctBlock: {
				value: correctBlock,
				enumerable: true
			},
			timidBlock: {
				value: timidBlock,
				enumerable: true
			},
			delusionalBlock: {
				value: delusionalBlock,
				enumerable: true
			},
			correctCode: {
				value: correctCode,
				enumerable: true
			}
		}
	)

	idGen++
	const db = gameDatabase.entities
	db.CodeBlocks.push(codeBlock)
	gameDatabase.save()
}

module.exports = create_CodeBlock