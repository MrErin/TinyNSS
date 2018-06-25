const determineButtonElements = require('../Events/determineButtonElements')
const nukeControlSection = require('./nukeControlSection')

//this function calls for a random number of buttons to be made from the given event tables. The parameters are (table, minimum number of buttons, maximum number of buttons +1)
const buildRandomizedButtons = () => {
	determineButtonElements('parties', 0, 3)
	determineButtonElements('meetups', 1, 4)
}

module.exports = buildRandomizedButtons