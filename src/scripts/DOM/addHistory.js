const $ = require ('jquery')

const addHistory = (message) => {
	$('#History').prepend($(`<p class="history">${message}</p>`))
}

module.exports = addHistory