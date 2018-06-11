const objectLength = object => {
	let length = 0
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			++length
		}
	}
	return length
}

module.exports = objectLength