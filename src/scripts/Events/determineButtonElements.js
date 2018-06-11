const dbLoad = require('../Helpers/dbLoader')
const getRandomNumber = require('../Helpers/getRandomNumber')
const buildRandomArray = require('../Helpers/buildRandomArray')
const buildEventButtons = require('./buildEventButtons')


//type is either "party" or "meetup". min is the fewest allowable number of buttons. max is the most allowable number of buttons
const determineButtonElements = (type, min, max) => {
	//i want to get to an array of N randomly determined index numbers for the buttons. ex: [3,0]

	const db = dbLoad()
	const inputArray = db.Events[type]
	let inputArrayIndices = []
	let counter = 0

	inputArray.forEach(item => {
		inputArrayIndices.push(counter)
		counter++
	})

	//determine how many items will be in the array
	const numberOfButtons = getRandomNumber(min, max)

	//determine which index numbers will be in the array
	let randomizedArray = buildRandomArray(inputArrayIndices)
	let resultArray = []

	for (let i = 0; i < numberOfButtons; i++) {
		resultArray.push(randomizedArray.pop())
	}

	buildEventButtons(type, resultArray)
}

module.exports = determineButtonElements