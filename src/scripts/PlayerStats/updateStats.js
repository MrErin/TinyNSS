const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const pcIsDead = require('./pcIsDead')
const pcNeedsSleep = require('./pcNeedsSleep')
const updateAllBars = require('../DOM/updateAllBars')

//this function checks whether a requested stat update would put the stat over or below the maximum/minimum. It also calls the death and sleep functions if necessary. If everything checks out, the function updates the database and the HUD and saves the updated data
const updateStats = (need, needValue, changeValue) => {
	const db = dbLoad()
	const PC = db.Player

	//check to ensure the requested change won't drop the stat below 0
	if ((needValue + changeValue) < 0) {
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

		//check to determine if requested change will put player's confidence above 10
	} else if ((need === 'confidence') && ((needValue + changeValue) > 10)) {
		PC.isNew = false
		PC.confidence = 10
		dbSave(db)
		updateAllBars()
		return true

		//check to determine if requested change will put player's other needs above 100
	} else if ((needValue + changeValue) > 100) {
		PC.isNew = false
		PC[need] = 100
		dbSave(db)
		updateAllBars()
		return true

		//if everything is green, update the stat
	} else {
		PC.isNew = false
		PC[need] += changeValue
		dbSave(db)
		updateAllBars()
		return true
	}
}

module.exports = updateStats