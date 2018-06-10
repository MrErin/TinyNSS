const create_Event = require('./evt_create_Event')

// eventType, (can only be food, party, or meetup)
// name,
// eventStartText,
// energyValue,
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
	create_Event('food', 'burger', 'ate a burger', -5, 0, 0, 10, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'salad', 'ate a salad', -5, 0, 0, 5, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'ice cream', 'ate ice cream', -5, 0, 0, 5, 0, 3, '', '', 0, 0, 0, 0)
	create_Event('food', 'sandwich', 'ate a sandwich', -5, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'soup', 'ate some soup', -5, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
}

module.exports = initializeEvents