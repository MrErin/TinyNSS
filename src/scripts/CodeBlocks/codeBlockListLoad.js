const cblLoad = () => {
	const codeBlockList = sessionStorage.getItem('codeBlockList')
	return JSON.parse(codeBlockList)
}

module.exports = cblLoad