const fs = require("fs");
const jsonData = require("./work.json");
const fileName = "locationArray.json";
const fileArray = [];

packagerFunction(jsonData.settlements);
function packagerFunction(locationNames) {
  for (i in locationNames) {
    let jsonTemplate = {
        locationName: "",
        locationURL: `https://forgottenrealms.fandom.com/wiki/`,
        locationRaces: [
          "Human",
          "Dwarf",
          "Elf",
          "Halfling",
          "Halfelf",
          "Gnome",
          "Halforc",
        ],
      }
    jsonTemplate.locationName = locationNames[i];
    jsonTemplate.locationURL = `https://forgottenrealms.fandom.com/wiki/${locationNames[i]}`;
    fileArray.push(jsonTemplate);
    console.log(jsonTemplate);
  }
  let jsonString = JSON.stringify(fileArray, null, 2);
  try {
    fs.writeFileSync(fileName, jsonString, (options = { flag: "w+" }));
  } catch (err) {
    console.log(err);
  }
}
