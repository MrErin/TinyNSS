const create_Event = require('./evt_create_Event')


const initializeEvents = () => {
	//build foods
	create_Event('food', 'burger', 'ate a burger', -5, 0, 0, 10, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'salad', 'ate a salad', -5, 0, 0, 5, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'ice cream', 'ate ice cream', -5, 0, 0, 5, 0, 3, '', '', 0, 0, 0, 0)
	create_Event('food', 'sandwich', 'ate a sandwich', -5, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
	create_Event('food', 'soup', 'ate some soup', -5, 0, 0, 7, 0, 0, '', '', 0, 0, 0, 0)
	//build parties
	create_Event('party', 'Go to game night', 'went to Game Night!', -10, 0, 1, 0, 15, 20, 'Game night was so great! I won all the games!', 'Well, that was terrible. We all got way too competitive.', 0, -10, -10, 0)
	create_Event('party', 'Go to party', 'had a few people over.', -20, 0, 1, 5, 20, 30, 'I just...I love you guys so much!', 'Lampshade on the head?! WTF was I thinking?! I\'m so embarrassed!', 5, -25, -10, -1)
	create_Event('party', 'Go out for drinks', 'went out for drinks with classmates.', -5, 0, 0, 10, 20, 15, 'Best night ever!', 'Well, we fought with each other and then all got food poisoning. Worst. Night. Ever.', 7, -20, -10, 0)
	create_Event('party', 'Have a potluck', 'had a potluck with classmates', -10, 0, 0, 20, 20, 10, 'I ate so much I\'m going to have a food baby and name her Janice.', 'No one liked my dish. Who doesn\'t like peanut butter and asparagus?!', 15, 10, 5, -1)
	create_Event('party', 'Go bowling', 'went bowling after class.', -10, 0, 0, 0, 15, 20, 'that was so much fun!', 'I dropped the ball on my toe.', 0, 10, -5, 0)
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


	//build meetups
	//pynash, nashville women programmers, nss alumni hours, girl geek dinner, hackathon
}

module.exports = initializeEvents