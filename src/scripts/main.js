const determineSave = require('./Database/determineSave')
const controlBuilder = require('./DOM/controlBuilder')
const tickCheck = require('./Time/tickCheck')
const updateAllBars = require('./DOM/updateAllBars')
const dayZero = require('./Days/dayZero')



determineSave()
controlBuilder()
updateAllBars()
dayZero()
tickCheck()