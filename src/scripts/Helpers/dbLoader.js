const dbLoad = () => {
	const gameData = localStorage.getItem('GameDatabase')
	return JSON.parse(gameData)
}

module.exports = dbLoad