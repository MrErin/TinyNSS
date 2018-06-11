const buttonFactory = (content, classes, id ,parent) => {
	const button = document.createElement('button')
	const domParent = document.getElementById(parent)

	button.textContent = content,
	button.classList = classes,
	button.id = id
	domParent.appendChild(button)
}

module.exports = buttonFactory