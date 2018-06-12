const determineSave = require('./Database/determineSave')
const controlBuilder = require('./DOM/controlBuilder')
const tickCheck = require('./Time/tickCheck')
const updateAllBars = require('./DOM/updateAllBars')

determineSave()
controlBuilder()
updateAllBars()
tickCheck()
