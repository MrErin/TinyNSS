const determineSave = require('./Actors/determineSave')
const tickCheck = require('./Time/tickCheck')
const controlBuilder = require('./DOM/controlBuilder')

determineSave()
tickCheck()
controlBuilder()