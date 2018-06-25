const $ = require('jquery')
const dbLoad = require('../Helpers/dbLoader')

//this function determines the version of the code block that will be displayed based on the character's confidence
const codeBlockTextDisplay = (codeId, complication) => {
	const db = dbLoad()
	let thisBlock = ''

	db.CodeBlocks.forEach(block => {
		if(codeId === block.codeId){
			thisBlock = block
		}
	})

	$('#codeBlockContent').val('')

	switch (complication) {
	case 'correct':
		$('#codeBlockContent').text(thisBlock.correctBlock)
		break
	case 'timid':
		$('#codeBlockContent').text(thisBlock.timidBlock)
		break
	case 'delusional':
		$('#codeBlockContent').text(thisBlock.delusionalBlock)
		break
	default:
		console.log(`Something is wrong. You fed a complication of ${complication} to /CodeBlocks/CodeBlockTextDisplay.`)
		break
	}
}

module.exports = codeBlockTextDisplay