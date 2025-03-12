const sexsJSON = require("../config/sexs.json")
function randomSex() {
    let sexs = sexsJSON.sexs
    const randomIndex = Math.floor(Math.random() * sexs.length);
    const randomSex = sexs[randomIndex];
    return randomSex;
  }
  module.exports = {
    randomSex,
  };