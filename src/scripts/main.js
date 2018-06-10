const determineSave = require('./Actors/determineSave')
const controlBuilder = require('./DOM/controlBuilder')
const tickCheck = require('./Time/tickCheck')
const updateAllBars = require('./DOM/updateAllBars')

determineSave()
controlBuilder()
updateAllBars()
// tickCheck()