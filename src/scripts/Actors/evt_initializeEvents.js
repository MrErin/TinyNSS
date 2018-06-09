const create_Event = require('./evt_create_Event')

// eventType, (can only be food, party, or meetup)
// name,
// eventStartText,
// energyBuffValue,
// workPointValue,
// confidenceBuffValue,
// hungerBuffValue,
// socialBuffValue,
// funBuffValue,
// buffText,
// debuffText,
// debuffHunger,
// debuffSocial,
// debuffFun,
// debuffConfidence

const initializeEvents = () => {
//build foods
	create_Event('food', 'burger', `ate a ${name}`, 0, 0, 0, 10, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'salad', `ate a ${name}`, 0, 0, 0, 5, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'ice cream', `ate ${name}`, 0, 0, 0, 5, 0, 3, '', '', 0, 0, 0, 0)
	create_Event('food', 'sandwich', `ate a ${name}`, 0, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'soup', `ate some ${name}`, 0, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
}

module.exports = initializeEvents