const updateBar = (barId, updateAmount) => {
	const bar = document.getElementById(barId)
	bar.value += updateAmount
}

module.exports = updateBar