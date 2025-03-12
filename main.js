const { NPC } = require("./functions/createNPC");
const { randomRace } = require("./functions/randomRace");
const { randomAge } = require("./functions/randomAge");
const { randomSex } = require("./functions/randomSex");
const { randomOccupation } = require("./functions/randomOccupation");
const { randomNames } = require("./functions/randomNames");
const readline = require("node:readline");
const fs = require("fs");
const { appendFileSync } = require("node:fs");
const { error } = require("node:console");
const date = new Date();
let dateYear = String(date.getFullYear());
let dateMonth = String(date.getMonth());
let dateDay = String(date.getDate());
let dateHour = String(date.getHours());
let dateMin = String(date.getMinutes());
let dateSec = String(date.getSeconds());
let formattedDate = (dateYear+dateMonth +  dateDay + "-" + dateHour + dateMin + dateSec)
fileName = "NPCs-" + formattedDate + ".json";
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
    let newNPC = new NPC(
      firstName,
      lastName,
      race.name,
      sex,
      age,
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
