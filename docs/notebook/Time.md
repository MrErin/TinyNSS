# Time

## Ticks

A tick is a looping timer that triggers need decay. Ticks are constant from the beginning of the day and effect every need except energy.

* (fn) decayConfidence
  * Inputs: PC.confidence, this.confidenceDecayRate
  * Work: evaluate whether confidence needs to be gained or lost (to balance at 0).
  * Output: Return the positive or negative number that confidence needs to be adjusted by.
* (fn) decayHunger
  * Inputs: PC.hunger, this.hungerDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of hunger points the PC loses per tick
* (fn) decayFun
  * Inputs: PC.fun, this.funDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of fun points the PC loses per tick
* (fn) decaySocial
  * Inputs: PC.social, this.socialDecayRate
  * Work: Perform calculation for decay rate
  * Output: Return the number of social points the PC loses per tick
