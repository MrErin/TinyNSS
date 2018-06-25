//this is used in the tick function to determine whether to build or destroy the player's confidence over time. the function seeks to bring confidence back to a median of 6
const calcConfidence = (currentConfidence) => {
	const optimumValue = 6
	if(currentConfidence < 6) {
		return 1
	} else {
		return -1
	}
}

module.exports = calcConfidence