const gameDatabase = require('./create_GameDatabase')

const create_Instructor = (type, instructorId, name, thumbsUpValue, imageLink) => {
	const instructor = Object.create(
		{},
		{
			type: {
				value: type,
				enumerable: true
			},
			instructorId: {
				value: instructorId,
				enumerable: true
			},
			name: {
				value: name,
				enumerable: true
			},
			dialogueOptions: {
				value: [],
				enumerable: true
			},
			thumbsUpValue: {
				value: thumbsUpValue,
				enumerable: true
			},
			imageLink: {
				value: imageLink,
				enumerable: true
			}
		}
	)

	const db = gameDatabase.entities
	db.Instructors.push(instructor)
	gameDatabase.save()
}

module.exports = create_Instructor