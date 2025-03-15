const sexsJSON = require("../config/sexes.json");
const randomArrayValue = require("./randomArrayValue");
function randomSex() {
  const sexes = sexsJSON.sexes;
  return randomArrayValue.randomArrayValue(sexes);
}
module.exports = {
  randomSex,
};