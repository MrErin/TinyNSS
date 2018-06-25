const determineButtonElements = require('../Events/determineButtonElements')
const nukeControlSection = require('./nukeControlSection')

const buildRandomizedButtons = () => {
	determineButtonElements('parties', 0, 3)
	determineButtonElements('meetups', 1, 4)
}

module.exports = buildRandomizedButtons