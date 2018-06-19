const cblSave = (list) => {
	sessionStorage.setItem('codeBlockList', JSON.stringify(list))
}

module.exports = cblSave