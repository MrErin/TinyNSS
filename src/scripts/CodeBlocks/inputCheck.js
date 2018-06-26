const $ = require('jquery')


//this function runs on every keyup to check the player's input when attempting code blocks.
//it is called in the "displayCodeBlock.js" file.
const inputCheck = (correctCode) => {
	const playerInputText = document.getElementById('playerInput').value
	let inputCharacterCodes = []
	const playerInputLength = playerInputText.length
	console.log('input check', correctCode)

	//push the player's input character to the array
	for (let i = 0; i < playerInputLength; i++) {
		inputCharacterCodes.push(playerInputText.charCodeAt(i))
	}

	const inputIndex = playerInputLength - 1

	//finds the correct ASCII code at the index of the currently input character
	let currentCorrectCodeCharacter = correctCode.charCodeAt(inputIndex)

	//this bit handles a CR. In the "correct" version of all code blocks I replaced a CR with symbol 198 for ease of typing.
	if (currentCorrectCodeCharacter === 198) {
		currentCorrectCodeCharacter = 10
	}

	//if the input character is correct but there is more to type, the program will exit here and wait for another input from the player
	if (inputCharacterCodes[inputIndex] === currentCorrectCodeCharacter){

		//if the code is complete...
		if (inputIndex === correctCode.length - 1){

			//...enable the submit code block button
			$('#submitCodeBlock').prop('disabled', false)

		}
	} else {
		//if the character is not correct, it is removed to signal the player they need to try a different character
		document.getElementById('playerInput').value = playerInputText.substring(0, playerInputLength - 1)
	}
}

module.exports = inputCheck