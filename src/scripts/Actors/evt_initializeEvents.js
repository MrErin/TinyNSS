const create_Event = require('./evt_create_Event')

// name,
// text,
// energyChangeValue,
// workPointValue,
// confidenceChangeValue,
// hungerChangeValue,
// socialChangeValue,
// funChangeValue

const initializeEvents = () => {
	create_Event('eat_burger', 'ate a hamburger', 0, 0, 0, 10, 0, 0)
	create_Event('eat_salad', 'ate a salad', 0, 0, 0, 10, 0, 0)
}

module.exports = initializeEvents