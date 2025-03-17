const { NPC } = require("./functions/createNPC");
const { randomRace } = require("./functions/randomRace");
const { randomAge } = require("./functions/randomAge");
const { randomSex } = require("./functions/randomSexes");
const { randomOccupation } = require("./functions/randomOccupation");
const { randomNames } = require("./functions/randomNames");
const { getFormattedDate } = require('./functions/getFormattedDate')
const { randomLocation } = require("./functions/randomRegion")
const { randomStats } = require('./functions/randomStats')
const readline = require("node:readline");
const fs = require("fs");
const { randomCurrency } = require("./functions/randomCurrency");


const formattedDate = getFormattedDate()
const fileName = "./NPCs/NPCs-" + formattedDate + ".json";
const path = require('path');
const directoryPath = path.join(__dirname, 'NPCs/foundryNPCs');

if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath,options={recursive:true});
  console.log(`Directory '${directoryPath}' created.`);
} else {
  console.log(`Directory '${directoryPath}' already exists.`);
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let i = 0;
let i2 = 1; //how many NPCs to generate
let newNPCArray = {NPCs:[]}
rl.question(`How many NPCs should I generate?: `, (number) => {
  console.log(`Generating NPCs...`);
  i2 = BigInt(number);
  while (i < i2) {
    let race = randomRace();
    let age = randomAge(race.minAge, race.maxAge);
    let sex = randomSex();
    let occupation = randomOccupation();
    let wholeName = randomNames(String(race.name), String(sex));
    let firstName = wholeName.fistname;
    let lastName = wholeName.lastName;
    let locatoinJSON = randomLocation()
    let statsJSON = randomStats()
    let currency = randomCurrency()
    let newNPC = new NPC(
      firstName,
      lastName,
      race.name,
      sex,
      age,
      statsJSON,
      currency,
      locatoinJSON.continentName,
      locatoinJSON.regionName,
      locatoinJSON.regionURL,
      locatoinJSON.locationName,
      locatoinJSON.locationURL,
      occupation.category,
      occupation.job
    );
    console.log("---====NPC: " + (i+1) + " ====---");
    newNPCArray.NPCs.push(newNPC)
    console.log(newNPC);
    i++;
  }
  const jsonString = JSON.stringify(newNPCArray,null,2)
  try{
    fs.writeFileSync(fileName,jsonString,options={flag:"w+"})
  }
  catch(err){
    console.log("ERROR: File Exists, please delete current npcs.json and run again to save list")
  }
  rl.close();
  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl2.question("press any key to continue....", () => {
    console.log("Closing application....");
    rl2.close();
  });
});
