const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const pcIsDead = require('./pcIsDead')
const pcNeedsSleep = require('./pcNeedsSleep')
const updateAllBars = require('../DOM/updateAllBars')

//this function checks whether a requested stat update would put the stat over or below the maximum/minimum. It also calls the death and sleep functions if necessary. If everything checks out, the function updates the database and the HUD and saves the updated data
const updateStats = (need, needValue, changeValue) => {
	const db = dbLoad()
	const PC = db.Player

	//fires if the change value is negative. Keeps the floor at 0.
	if (changeValue < 0) {

		//nothing should ever remove coderPoints
		if (need === 'coderPoints') {
			console.log('a function attempted to remove coderPoints')
			return false

		//ensure requested stat won't drop below 0
		} else if ((needValue + changeValue) < 0) {
			switch (need) {
			case 'hunger':
				PC.isNew = false
				pcIsDead()
				return false
			case 'energy':
				PC.isNew = false
				pcNeedsSleep()
				return false
			case 'social':
			case 'fun':
			case 'confidence':
				PC.isNew = false
				PC[need] = 0
				dbSave(db)
				updateAllBars()
				return true
			default:
				console.log('something is wrong. check the playerStats/updateStats function.')
				break
			}
		}

		//if stat can drop without being artificially manipulated, update as normal
		PC.isNew = false
		PC[need] += changeValue
		dbSave(db)
		updateAllBars()
		return true

	//fires if the changeValue is positive. Caps stat bumps at 100 (except for CoderPoints, which are unlimited and confidence, which caps at 10)
	} else {

		//caps player confidence at 10
		if ((need === 'confidence') && ((needValue + changeValue) > 10)) {
			PC.isNew = false
			PC.confidence = 10
			dbSave(db)
			updateAllBars()
			return true

		//caps all stats except coderPoints at 100
		} else if ((need !== 'coderPoints') && (needValue + changeValue > 100)) {
			PC.isNew = false
			PC[need] = 100
			dbSave(db)
			updateAllBars()
			return true
		}

		//if stat can rise without being artificially manipulated, update as normal
		PC.isNew = false
		PC[need] += changeValue
		dbSave(db)
		updateAllBars()
		return true
	}
}

module.exports = updateStats