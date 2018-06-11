const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')

const resetPlayer = () => {
	const db = dbLoad()
	const PC = db.Player

	PC.isNew = true
	PC.workPoints = 0
	PC.confidence = 6
	PC.energy = 100
	PC.hunger = 50
	PC.social = 50
	PC.fun = 50

	dbSave(db)

}

module.exports = resetPlayer