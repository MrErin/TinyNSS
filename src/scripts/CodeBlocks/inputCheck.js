const $ = require('jquery')

const inputCheck = (correctCode) => {
	const playerInputText = document.getElementById('playerInput').value
	let inputCharacterCodes = []
	const playerInputLength = playerInputText.length
	console.log(correctCode)

	for (let i = 0; i < playerInputLength; i++) {
		inputCharacterCodes.push(playerInputText.charCodeAt(i))
	}

	const inputIndex = playerInputLength - 1
	let currentCorrectCodeCharacter = correctCode.charCodeAt(inputIndex)

	if (currentCorrectCodeCharacter === 198) {
		currentCorrectCodeCharacter = 10
	}
	if (inputCharacterCodes[inputIndex] === currentCorrectCodeCharacter){
		if (inputIndex === correctCode.length - 1){
			//correct conditions
			//do something to tell the player to stop
			$('#submitCodeBlock').prop('disabled', false)

		}
	} else {
		document.getElementById('playerInput').value = playerInputText.substring(0, playerInputLength - 1)
	}
}

module.exports = inputCheck