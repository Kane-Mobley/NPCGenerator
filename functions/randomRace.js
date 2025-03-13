const raceJSON = require("../config/races.json");
const randomArrayValue = require("../functions/randomArrayValue");
function randomRace() {
  const races = raceJSON.races;
  return randomArrayValue.randomArrayValue(races);
}
module.exports = {
  randomRace,
};
