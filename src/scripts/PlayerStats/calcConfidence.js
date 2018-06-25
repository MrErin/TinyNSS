const calcConfidence = (currentConfidence) => {
	const optimumValue = 6
	if(currentConfidence < 6) {
		return 1
	} else {
		return -1
	}
}

module.exports = calcConfidence