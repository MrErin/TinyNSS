const dbLoad = require('../Helpers/dbLoader')
const dbSave = require('../Helpers/dbSaver')
const pcIsDead = require('./pcIsDead')
const pcNeedsSleep = require('./pcNeedsSleep')
const updateAllBars = require('../DOM/updateAllBars')

const updateStats = (need, needValue, changeValue) => {
	const db = dbLoad()
	const PC = db.Player

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
	} else if ((need === 'confidence') && ((needValue + changeValue) > 10)) {
		PC.isNew = false
		PC.confidence = 10
		dbSave(db)
		updateAllBars()
		return true
	} else if ((needValue + changeValue) > 100) {
		PC.isNew = false
		PC[need] = 100
		dbSave(db)
		updateAllBars()
		return true
	} else {
		PC.isNew = false
		PC[need] += changeValue
		dbSave(db)
		updateAllBars()
		return true
	}
}

module.exports = updateStats