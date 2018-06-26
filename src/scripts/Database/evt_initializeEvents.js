const create_Event = require('./evt_create_Event')

// eventType, (can only be food, party, or meetup)
// name, (this is what shows up on the button)
// eventStartText,
// energyValue,
// coderPointValue,
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

	//build parties
	create_Event('party', 'Go to game night', 'went to Game Night.', -10, 0, 1, 0, 15, 20, 'Game night was so great! I won all the games!', 'Well, that was terrible. We all got way too competitive.', 0, -10, -10, 0)
	create_Event('party', 'Go to party', 'had a few people over.', -20, 0, 1, 5, 20, 30, 'I just...I love you guys so much!', 'Lampshade on the head?! WTF was I thinking?! I\'m so embarrassed!', 5, -25, -10, -1)
	create_Event('party', 'Go out for drinks', 'went out for drinks with classmates.', -5, 0, 0, 10, 20, 15, 'Best night ever!', 'Well, we fought with each other and then all got food poisoning. Worst. Night. Ever.', 7, -20, -10, 0)
	create_Event('party', 'Have a potluck', 'had a potluck with classmates.', -10, 0, 0, 20, 20, 10, 'I ate so much I\'m going to have a food baby and name her Janice.', 'No one liked my dish. Who doesn\'t like peanut butter and asparagus?!', 15, 10, 5, -1)
	create_Event('party', 'Go bowling', 'went bowling after class.', -10, 0, 0, 0, 15, 20, 'That was so much fun!', 'I dropped the ball on my toe.', 0, 10, -5, 0)
	create_Event('party', 'Go kayaking', 'went kayaking with classmates.', -10, 0, 0, 10, 20, 25, 'The river was so relaxing!', 'My kayak rolled over and dumped me out. That was embarrassing.', 10, 10, -10, -0.5)

	//build meetups
	create_Event('meetup', 'PyNash', 'went to the PyNash meetup.', -15, 10, 0.5, 0, 20, 5, 'I can\'t wait to try that new technique!', 'I couldn\'t find anyone to talk to...', 0, -5, -5, 0)
	create_Event('meetup', 'Nashville Women Programmers', 'went to the meetup of Nashville Women Programmers', -15, 10, 1, 0, 25, 10, 'I met so many great people!', 'I wanted to go but couldn\'t find parking.', 0, -10, -15, 0)
	create_Event('meetup', 'NSS Alumni Hours', 'stopped by the NSS alumni hours.', -15, 10, 0.5, 0, 10, 5, 'That was great! They made it look so easy!', 'Ugh. They make it look so easy. I\'ll never be that good.', 0, -10, 0, -1)
	create_Event('meetup', 'Girl Geek Dinner', 'went to a Girl Geek Dinner.', -15, 15, 0.5, 10, 20, 5, 'I love hanging out with so many smart people!', 'Oops. The food was so good I forgot to pay attention to the speaker.', 20, 10, 0, 0)
	create_Event('meetup', 'Hackathon', 'offered to help with a hackathon.', -20, 15, 1, -10, 15, 5, 'I understood everything I was asked to do. This is awesome!', 'I felt totally lost. I doubt I was any help at all.', 0, 5, -10, -1)
}

module.exports = initializeEvents