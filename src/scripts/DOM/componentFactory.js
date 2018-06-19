const componentFactory = (type, contents, id, classes, parent) => {
	const component = document.createElement(type)
	const domParent = document.getElementById(parent)
	if (type === 'input' || type === 'textarea'){
		component.placeholder = contents
	} else {
		component.textContent = contents
	}
	component.id = id
	component.classList = classes
	domParent.appendChild(component)
}

module.exports = componentFactory