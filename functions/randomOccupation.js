const occupations = require("../config/occupations.json")
function randomOccupation() {
  let occupationJSON = occupations
  let occupationKeys = []
  let occupationArray = []
  for (key in occupationJSON) {
    occupationKeys.push(key)
  }
  const randomKeyIndex = Math.floor(Math.random() * occupationKeys.length)
  const randomKey = occupationKeys[randomKeyIndex]
  for (entry in occupationJSON[randomKey].jobs) {
    occupationArray.push(occupationJSON[randomKey].jobs[entry])
  }
  const randomOccupationIndex = Math.floor(
    Math.random() * occupationArray.length
  )
  const randomJob = occupationArray[randomOccupationIndex]
  return {job : randomJob, category: randomKey}
}
module.exports = {
  randomOccupation,
}