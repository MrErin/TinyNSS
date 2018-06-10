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
	create_Event('food', 'burger', 'ate a burger', 0, 0, 0, 10, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'salad', 'ate a salad', 0, 0, 0, 5, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'ice cream', 'ate ice cream', 0, 0, 0, 5, 0, 3, '', '', 0, 0, 0, 0)
	create_Event('food', 'sandwich', 'ate a sandwich', 0, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'soup', 'ate some soup', 0, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
}

module.exports = initializeEvents