const tick = require('./tick')
const buildPauseStartButton = require('./buildPauseStartButton')

const startTime = () => {
	buildPauseStartButton('pause')

	//enter the seconds per tick here
	const timePerTick = 2
	ticker = setInterval(tick, (timePerTick * 1000))
}

module.exports = startTime
