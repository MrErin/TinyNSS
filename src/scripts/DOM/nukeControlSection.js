const $ = require('jquery')

const nukeControlSection = (controlId) => {
	const nukeId = document.getElementById(controlId)
	while (nukeId.firstChild){
		nukeId.removeChild(nukeId.firstChild)
	}
}

module.exports = nukeControlSection