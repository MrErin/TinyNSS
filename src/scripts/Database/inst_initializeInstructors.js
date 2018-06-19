const create_Instructor = require('./inst_create_Instructor')


// type, instructorId, name, thumbsUpValue

const initializeInstructors = () => {
	create_Instructor('instructor', 1, 'Steve', 3)
	create_Instructor('instructor', 2, 'Kimmy', 1)
	create_Instructor('instructor', 3, 'Jisie', 1)
	create_Instructor('instructor', 4, 'Arwa', 1)
	create_Instructor('student', 5, 'Another Student', 0.5)
}

module.exports = initializeInstructors