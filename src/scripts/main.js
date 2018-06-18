const determineSave = require('./Database/determineSave')
const controlBuilder = require('./DOM/controlBuilder')
const updateAllBars = require('./DOM/updateAllBars')
const dayZero = require('./Days/dayZero')
const startTime = require('./Time/startTime')



determineSave()
controlBuilder()
updateAllBars()
dayZero()
startTime()