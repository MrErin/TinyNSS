# Data Definitions

TinyNSS creates a database with the following elements and saves it to session storage upon page load:

* Code Blocks (array of objects):
  * blockLanguage
  * blockTitle
  * codeId
  * correctBlock
    * The displayed code if confidence is optimal
  * correctCode
    * The set of characters that will be accepted as correct
  * dayNumber
  * delusionalBlock
  * timidBlock
* Days (array of objects)
  * dayNumber
  * dayStartText
* Events (array of arrays of objects. Food, meetups, and parties are their own arrays, and all have the same field names.)
  * buffText
  * coderPointValue
  * confidenceBuffValue
  * confidenceDebuffValue
  * debuffText
  * energyValue
  * eventStartText
  * funBuffValue
  * funDebuffValue
  * hungerBuffValue
  * hungerDebuffValue
  * name
  * socialBuffValue
  * socialDebuffValue
* Game (object that sets up the decay rates and other basic game mechanics)
  * confidenceDecayRate
    * Must always be positive in the database. The calcConfidence function will determine whether the swing is positive or negative
  * currentDay
  * energyPerCodeBlock
  * funDecayRate
  * gameName
  * hungerDecayRate
  * socialDecayRate
* Instructors (array of objects)
  * instructorId
  * name
  * thumbsUpValue
  * type
* Player
  * coderPoints
  * confidence
  * energy
  * fun
  * hunger
  * isNew
  * name
  * social