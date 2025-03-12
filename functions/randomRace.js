const raceJSON = require("../config/races.json")
function randomRace() {
  let races = raceJSON.races;
  const randomIndex = Math.floor(Math.random() * races.length);
  const randomRace = races[randomIndex];
  return randomRace;
}
module.exports = {
  randomRace,
};
