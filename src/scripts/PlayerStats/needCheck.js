const dbLoad = require('../Helpers/dbLoader')
const addHistory = require('../DOM/addHistory')
const pauseTime = require('../Time/pauseTime')
const pcNeedsSleep = require('./pcNeedsSleep')

const needCheck = (need, value, min, max) => {

	if (value <= min) {
		switch (need) {
		case 'confidence':
		    addHistory('Confidence Too Low', 'There\'s no way I can even try to do that! I\'ll fail!', 'fas fa-ban historyIcon', 0)
		    return false
		case 'energy':
			addHistory('Energy Too Low', 'No...I can\'t even right now.', 'fas fa-ban historyIcon', 0)
			pcNeedsSleep()
		    return false
		case 'hunger':
			addHistory('Hunger Too Low', 'The dead don\'t eat.', 'fas fa-ban historyIcon', 0)
			return false
		case 'social':
			addHistory('Social Too Low', 'If I can\'t talk to somebody right now I\'m going to scream. What if I scream and no one\'s around to hear it?!?', 'fas fa-ban historyIcon', 0)
			return false
		case 'fun':
			addHistory('Fun Too Low', 'I would rather be doing literally anything else.', 'fas fa-ban historyIcon', 0)
			return false
		default:
			pauseTime(ticker)
			console.log(`Something went wrong. You passed me the ${need} need, which has a value of ${value}.`)
			break

		}
	} else if (value >= max) {
		switch (need) {
		case 'confidence':
		    addHistory('Confidence Too High', 'There\'s no way I can fail! I am never wrong! Google has to ask *ME* for answers!', 'fas fa-ban historyIcon', 0)
		    return false
		case 'energy':
		    addHistory('Energy Too High', 'You know what I\'m thinking it would be cool if everyone walked backwards for a whole day like this you know it would be so awesome what about code no I can\'t think about code right now.', 'fas fa-ban historyIcon', 0)
		    return false
		case 'hunger':
			addHistory('Hunger Too High', 'Are you kidding me? I\'ll bust out of my fat pants!', 'fas fa-ban historyIcon', 0)
			return false
		case 'social':
			addHistory('Social Too High', 'Gah won\'t you people leave me alone?! I can\'t even think right now!', 'fas fa-ban historyIcon', 0)
			return false
		case 'fun':
			addHistory('Fun Too High','Funfunfun...Funfunfunfunfunfun.', 'fas fa-ban historyIcon', 0)
			return false
		default:
			pauseTime(ticker)
			console.log(`Something went wrong. You passed me the ${need} need, which has a value of ${value}.`)
			break
		}
	} else {
		return true
	}

}

module.exports = needCheck