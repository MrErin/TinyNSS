const tick = require('./tick')
const $ = require('jquery')

const tickCheck = () => {

	//enter the seconds per tick here
	const timePerTick = 3

	ticker = setInterval(tick, (timePerTick * 1000))
}

module.exports = tickCheck
