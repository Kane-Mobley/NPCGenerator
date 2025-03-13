const occupations = require("../config/occupations.json")
const randomArrayValue = require("../functions/randomArrayValue");
function randomOccupation() {
  const occupationJSON = occupations
  const occupationKeys = Object.keys(occupationJSON)
  const randomCategory = randomArrayValue.randomArrayValue(occupationKeys)
  const randomJob = randomArrayValue.randomArrayValue(occupationJSON[randomCategory].jobs)
  return {job : randomJob, category: randomCategory}
}
module.exports = {
  randomOccupation,
}