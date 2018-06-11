const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')

const resetPlayer = () => {
	const db = dbLoad()
	const PC = db.Player

	PC.isNew = true
	PC.workPoints = 0
	PC.confidence = 1
	PC.energy = 20
	PC.hunger = 50
	PC.social = 20
	PC.fun = 20

	dbSave(db)

}

module.exports = resetPlayer