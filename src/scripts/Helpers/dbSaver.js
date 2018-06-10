const dbSave = (database) => {
	localStorage.setItem('GameDatabase', JSON.stringify(database))
}

module.exports = dbSave