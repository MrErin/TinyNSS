const $ = require ('jquery')


const addHistory = (message) => {
	$('#Messages').prepend($(`<p>${message}</p>`))
}

module.exports = addHistory