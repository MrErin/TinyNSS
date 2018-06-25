const create_Day = require('./dy_create_Day')

const initializeDays = () => {
	create_Day(0, 'Today we will learn: how to play this game.')
	create_Day(1, 'Today we will learn: arrow syntax, the command line, and the Node Package Manager.')
	create_Day(2, 'Today we will learn: GitHub CLI, printing to the DOM, and factory functions.')
	create_Day(3, 'Today we will learn: if conditions, for and forEach loops, interpolation, and nested CSS.')
	create_Day(4, 'Today we will learn: Object.create, array map, filter, and reduce.')
	create_Day(5, 'Today we will learn: more nested CSS, CSS pseudo selectors, objects of objects, and arrays of arrays.')
	create_Day(6, 'Today we will learn: JSON databases and session and local storage.')
	create_Day(7, 'Today we will learn: event listeners in JavaScript and jQuery.')
	create_Day(8, 'Today we will learn: jQuery fade effects and animations.')
	create_Day(9, 'Today we will learn: AJAX get, JSON server, and Promise.all')
	create_Day(10, 'Today we will learn: REACT!')
}

module.exports = initializeDays