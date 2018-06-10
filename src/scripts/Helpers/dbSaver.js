const dbSave = (database) => {
	sessionStorage.setItem('GameDatabase', JSON.stringify(database))
}

module.exports = dbSave