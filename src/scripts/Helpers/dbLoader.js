const dbLoad = () => {
	const gameData = sessionStorage.getItem('GameDatabase')
	return JSON.parse(gameData)
}

module.exports = dbLoad