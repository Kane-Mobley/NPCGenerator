const XGE_Names = require("../config/XGE_Race_Names.json");
const randomArrayValue = require("../functions/randomArrayValue");
function randomNames(race, sex) {
  const sexRace = sex + race;
  const raceClan = race + "Clan";
  const names = XGE_Names[sexRace].names;
  const clanNames = XGE_Names[raceClan].names;
  const randomName = randomArrayValue.randomArrayValue(names);
  const randomClan = randomArrayValue.randomArrayValue(clanNames);
  return { fistname: randomName, lastName: randomClan };
}
module.exports = {
  randomNames,
};
