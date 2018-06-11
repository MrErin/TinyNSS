const buildRandomArray = (inputArray) => {
	let currentIndex = inputArray.length, temporaryValue, randomIndex

	while (0 !== currentIndex) {
		//pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex --

		//swap it with the current element
		temporaryValue = inputArray[currentIndex]
		inputArray[currentIndex] = inputArray[randomIndex]
		inputArray[randomIndex] = temporaryValue
	}

	return inputArray
}

module.exports = buildRandomArray