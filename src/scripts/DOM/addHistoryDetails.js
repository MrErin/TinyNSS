const componentFactory = require('./componentFactory')
const apnd = require('./apnd')

const addHistoryDetails = (detail, icon, classes, sectionId) => {
	const parent = document.getElementById(`HistoryContentWrap${sectionId}`)
	const detailWrap = componentFactory(
		'div',
		'',
		`HistoryDetailContentWrap${sectionId}`,
		'columns detailContentWrap'
	)
	apnd(parent, detailWrap)
	const detailHeader = componentFactory(
		'div',
		'',
		`HistoryDetailHeader${sectionId}`,
		`historyDetailHeader ${classes} column is-three-fifths is-offset-one-fifth columns`
	)
	apnd(detailWrap, detailHeader)
	const detailIconDiv = componentFactory(
		'div',
		'',
		`DetailHeaderIcon${sectionId}`,
		'detailIcon card-header-icon column is-one-fifth level-left'
	)
	apnd(detailHeader, detailIconDiv)
	const detailIcon = componentFactory(
		'i',
		'',
		'',
		`${icon} is-size-2 level-item`
	)
	apnd(detailIconDiv, detailIcon)
	const detailEndText = componentFactory(
		'div',
		detail,
		'',
		'detailText column'
	)
	apnd(detailHeader, detailEndText)
}

module.exports = addHistoryDetails