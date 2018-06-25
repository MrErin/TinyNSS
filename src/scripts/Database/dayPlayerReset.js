const dayPlayerReset = (database) => {
	const db = database
	const PC = db.Player

	PC.energy = 100

	if (PC.confidence >= 6) {
		PC.confidence -= 0.5
	} else {
		PC.confidence += 0.5
	}

	if (PC.hunger >= 60) {
		PC.hunger -= 30
	} else {
		PC.hunger += 30
	}
	if (PC.social <= 10) {
		PC.social += 20
	}
	if (PC.fun <= 10) {
		PC.fun += 20
	}

	return db
}

module.exports = dayPlayerReset