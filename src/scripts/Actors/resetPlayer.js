const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')

const resetPlayer = () => {
	const db = dbLoad()
	const PC = db.Player

	PC.isNew = true
	PC.workPoints = 0
	PC.confidence = 0
	PC.energy = 0
	PC.hunger = 100
	PC.social = 0
	PC.fun = 0

	dbSave(db)

}

module.exports = resetPlayer