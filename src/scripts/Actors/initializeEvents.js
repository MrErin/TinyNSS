const create_Event = require('./create_Event')

// name,
// text,
// energyChangeValue,
// workPointValue,
// confidenceChangeValue,
// hungerChangeValue,
// socialChangeValue,
// funChangeValue

const initializeEvents = () => {
	create_Event('eat_Hamburger', 'ate a hamburger', 0, 0, 0, 10, 0, 0)
}
