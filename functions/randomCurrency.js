const { randomArrayValue } = require("./randomArrayValue");
let numbersArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function randomCurrency() {
  let moneyJSON = {
    currency: {
      copper: randomArrayValue(numbersArray) * 100,
      silver: randomArrayValue(numbersArray) * 10,
      electrum: randomArrayValue(numbersArray) * 2,
      gold: randomArrayValue(numbersArray),
      platinum: Math.floor(randomArrayValue(numbersArray) / 10),
    },
  };
  return moneyJSON;
}
module.exports = {
  randomCurrency,
};
