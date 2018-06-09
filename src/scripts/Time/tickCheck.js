const tick = require('./tick')
const $ = require('jquery')

const tickCalc = () => {
	// time per tick, in minutes
	const timePerTick = 0.01

	let timeBegin = 0
	let ticker
	let timeNow = new Date().getTime()
	if (timeBegin === 0) {
		timeBegin = new Date().getTime()
	}
	if (timeNow - timeBegin > timePerTick * 60 * 1000) {
		timeBegin = new Date().getTime()
		console.log('tick')
	}
	tick()
}

const tickCheck = () => {
	ticker = setInterval(tickCalc, 3000)
}

module.exports = tickCheck
