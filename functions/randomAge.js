function randomAge(raceMinAge,raceMaxAge) {
  let ages = [];
  let i = raceMinAge;
  while (ages.length < 1200) {
    ages.push(i);
    i++;
  }
  if (raceMaxAge) {
    let randomIndex = Math.floor(Math.random() * raceMaxAge);
    let randomAge = ages[randomIndex];
    return randomAge;
  } else {
    return console.log("NO RACE PROVIDED");
  }
}
module.exports = {
  randomAge,
};
