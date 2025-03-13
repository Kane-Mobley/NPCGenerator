function randomAge(raceMinAge,raceMaxAge) {
  const age = Math.round(Math.random() * (raceMaxAge - raceMinAge)) + raceMinAge
  return age
}
module.exports = {
  randomAge,
};
