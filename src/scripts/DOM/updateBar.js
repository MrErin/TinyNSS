const dbLoad = require('../Helpers/dbLoader')

const updateBar = (barId) => {
	const bar = document.getElementById(`${barId}Bar`)
	const label = document.getElementById(`${barId}Label`)
	const upper = barId.replace(/^\w/, c => c.toUpperCase())
	const db = dbLoad()

	if (barId === 'confidence') {
		bar.value = db.Player.confidence

		switch(bar.value) {
		//0 to 4 is timid
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			label.innerText = `${upper}: Current Value: Timid; ${bar.value}`
			break

		//5 to 8 is optimal
		case 5:
		case 6:
		case 7:
		case 8:
			label.innerText = `${upper}: Current Value: Optimal; ${bar.value}`
			break

		//9 to 10 is delusional
		case 9:
		case 10:
			label.innerText = `${upper}: Current Value: Delusional; ${bar.value}`
			break

		default:
			label.innerText = `Something is wrong. Current value = ${bar.value}`
			break
		}
	} else {
		bar.value = db.Player[barId]
		label.innerText = `${upper}: Current Value: ${bar.value}`
	}
}

module.exports = updateBar