const addHistory = require('../DOM/addHistory')
const pcIsDead = require('./pcIsDead')
const pcNeedsSleep = require('./pcNeedsSleep')
const pauseTime = require('./pauseTime')

const deathCheck = (need, currentValue, deadValue) => {
	if (currentValue <= deadValue) {
		switch (need) {
		case 'hunger':
			pcIsDead()
			return false
		case 'energy':
			pcNeedsSleep()
			return false
		default:
			pauseTime(ticker)
			console.log('something went wrong. Check the /Time/deathCheck.js script.')
		}
	} else {
		return true
	}
}

module.exports = deathCheck
