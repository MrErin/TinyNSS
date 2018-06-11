const dbLoad = require('../Helpers/dbLoader')
const updateBar = require('./updateBar')

const updateAllBars = () => {
	const db = dbLoad()

	for(let key in db.Player) {
		if(key !== 'name' && key !== 'isNew') {
			updateBar(key)
		}
	}
}


module.exports = updateAllBars