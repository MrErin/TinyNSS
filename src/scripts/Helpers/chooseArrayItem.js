const dbLoad = require('./dbLoader')
const buildRandomArray = require('./buildRandomArray')

const chooseArrayItem = (array) => {
	const db = dbLoad()
	const inputArray = db.Events[array]
	let listArray = []

	inputArray.forEach(item => {
		listArray.push(inputArray.indexOf(item))
	})

	randomizedArray = buildRandomArray(listArray)
}

module.exports = chooseArrayItem