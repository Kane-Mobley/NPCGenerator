const { NPC } = require("./functions/createNPC");
const { randomRace } = require("./functions/randomRace");
const { randomAge } = require("./functions/randomAge");
const { randomSex } = require("./functions/randomSexes");
const { randomOccupation } = require("./functions/randomOccupation");
const { randomNames } = require("./functions/randomNames");
const { randomLocation } = require("./functions/randomRegion");
const { randomStats } = require("./functions/randomStats");
const { randomCurrency } = require("./functions/randomCurrency");
const fs = require("fs");
const path = require('path');
// const directoryPath = path.join(__dirname, 'NPCs/foundryNPCs');

// if (!fs.existsSync(directoryPath)) {
//   fs.mkdirSync(directoryPath,options={recursive:true});
//   console.log(`Directory '${directoryPath}' created.`);
// } else {
//   console.log(`Directory '${directoryPath}' already exists.`);
// }
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let i = 0;
let i2 = 25;
rl.question(`How many NPCs should I generate?: `, (number) => {
  console.log(`Generating NPCs....`);
  i2 = BigInt(number);
  while (i < i2) {
    let race = randomRace();
    let age = randomAge(race.minAge, race.maxAge);
    let sex = randomSex();
    let occupation = randomOccupation();
    let wholeName = randomNames(String(race.name), String(sex));
    let firstName = wholeName.fistname;
    let lastName = wholeName.lastName;
    let locatoinJSON = randomLocation();
    let stats = randomStats();
    let currency = randomCurrency();
    let newNPC = new NPC(
      firstName,
      lastName,
      race.name,
      sex,
      age,
      stats,
      currency,
      locatoinJSON.continentName,
      locatoinJSON.regionName,
      locatoinJSON.regionURL + " ",
      locatoinJSON.locationName,
      locatoinJSON.locationURL + " ",
      occupation.category,
      occupation.job
    );
    var fileName = "";
    if (i === 0) {
      fileName = `./NPCs/foundryNPCs/NPC - ${newNPC.occupationCategory} - ${newNPC.firstName} ${newNPC.lastName} - ${newNPC.race} - ${newNPC.sex}.json`;
    } else {
      fileName = `./NPCs/foundryNPCs/NPC# ${i + 1} -  ${
        newNPC.occupationCategory
      } - ${newNPC.firstName} ${newNPC.lastName} - ${newNPC.race} - ${
        newNPC.sex
      }.json`;
    }
    let foundryTemplateJSON = "";
    if (occupation.category === "CRIME") {
      foundryTemplateJSON = require("./config/npcTemplates/NPC_for_CRIME.json");
    } 
    else if (occupation.category === "AGRICULTURE_ANIMAL_HUSBANDRY_FORESTRY") {
      foundryTemplateJSON = require("./config/npcTemplates/NPC_for_AGRICULTURE_ANIMAL_HUSBANDRY_FORESTRY.json");
    } 
    else if (occupation.category === "ARCHITECTURE_CONSTRUCTION") {
      foundryTemplateJSON = require("./config/npcTemplates/NPC_for_ARCHITECTURE_CONSTRUCTION.json");
    } 
    else if (occupation.category === "THE_ARTS") {
      foundryTemplateJSON = require("./config/npcTemplates/NPC_for_THE_ARTS.json");
    } 
    else if (occupation.category === "COMMUNICATIONS") {
      foundryTemplateJSON = require("./config/npcTemplates/NPC_for_COMMUNICATIONS.json");
    } 
    else {foundryTemplateJSON = require("./config/npcTemplates/foundryNPCTemplate.json");}
    foundryTemplateJSON.name = newNPC.firstName + " " + newNPC.lastName;
    foundryTemplateJSON.prototypeToken.name =
      newNPC.firstName + " " + newNPC.lastName;
    foundryTemplateJSON.system.details.biography.value = `<pre><code>{key: \"${JSON.stringify(
      newNPC,
      null,
      10
    )}\"}</code></pre>`;
    foundryTemplateJSON.system.details.type.subtype = newNPC.race;
    foundryTemplateJSON.system.abilities.str.value = newNPC.stats.str;
    foundryTemplateJSON.system.abilities.dex.value = newNPC.stats.dex;
    foundryTemplateJSON.system.abilities.con.value = newNPC.stats.con;
    foundryTemplateJSON.system.abilities.wis.value = newNPC.stats.wis;
    foundryTemplateJSON.system.abilities.int.value = newNPC.stats.int;
    foundryTemplateJSON.system.abilities.cha.value = newNPC.stats.char;
    foundryTemplateJSON.system.currency.pp = newNPC.currency.currency.platinum
    foundryTemplateJSON.system.currency.gp = newNPC.currency.currency.gold
    foundryTemplateJSON.system.currency.ep = newNPC.currency.currency.electrum
    foundryTemplateJSON.system.currency.sp = newNPC.currency.currency.silver
    foundryTemplateJSON.system.currency.cp = newNPC.currency.currency.copper
    console.log(foundryTemplateJSON);

    const jsonString = JSON.stringify(foundryTemplateJSON, null, 3);
    try {
      fs.writeFileSync(fileName, jsonString, (options = { flag: "w+" }));
      i++;
    } catch (err) {
      console.log("ERROR:");
      console.log(err);
      i++;
    }
  }
  rl.close();
});
