const dayPlayerReset = (database) => {
	const db = database
	const PC = db.Player

	PC.energy = 100

	if (PC.confidence >= 6) {
		PC.confidence -= 1
	} else {
		PC.confidence += 1
	}

	if (PC.hunger >= 60) {
		PC.hunger -= 30
	} else {
		PC.hunger += 30
	}

	return db
}

module.exports = dayPlayerReset