const { randomArrayValue } = require("./randomArrayValue");
const statArray = [8, 9, 10, 11, 12, 13, 14];
function randomStats() {
  let randomStats = {
      str: randomArrayValue(statArray),
      dex: randomArrayValue(statArray),
      con: randomArrayValue(statArray),
      int: randomArrayValue(statArray),
      wis: randomArrayValue(statArray),
      char: randomArrayValue(statArray),
  };
  return randomStats
}
module.exports = {
    randomStats
}
