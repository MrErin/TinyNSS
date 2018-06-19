const tick = require('./tick')
const $ = require('jquery')
const buildPauseStartButton = require('./buildPauseStartButton')
const addHistory = require('../DOM/addHistory')


const startTime = () => {
	buildPauseStartButton('pause')
	//enter the seconds per tick here
	const timePerTick = 2

	ticker = setInterval(tick, (timePerTick * 1000))
}

module.exports = startTime
