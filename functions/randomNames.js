const XGE_Names = require("../config/XGE_Race_Names.json");

function randomNames(race, sex) {
  let sexRace = sex + race;
  let raceClan = race + "Clan";
  names = XGE_Names[sexRace];
  clanNames = XGE_Names[raceClan];
  let NamesArry = [];
  let clanNameArry = [];
  for (let key in names) {
    if (names.hasOwnProperty(key)) {
      NamesArry.push(names[key]);
    }
  }
  for (let key in clanNames) {
    if (clanNames.hasOwnProperty(key)) {
      clanNameArry.push(clanNames[key]);
    }
  }
  let randomIndex1 = Math.floor(Math.random() * NamesArry.length);
  let randomIndex2 = Math.floor(Math.random() * clanNameArry.length);
  let randomName = names[randomIndex1];
  let randomClan = clanNames[randomIndex2];
  return { fistname: randomName, lastName: randomClan };
}
module.exports = {
  randomNames,
};
