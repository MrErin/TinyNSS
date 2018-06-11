// Note on min/max:
//Min number is inclusive. If the min is 0, it's possible to return 0.
//Max is exclusive. If your actual max is 2, you need to set max at 3.

const getRandomNumber = (min, max) => {
	return parseInt(Math.random() * (max - min) + min)
}

module.exports = getRandomNumber