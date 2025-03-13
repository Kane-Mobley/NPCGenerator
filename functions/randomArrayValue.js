function randomArrayValue(a) {
  const randomIndex = Math.floor(Math.random() * a.length);
  return a[randomIndex];
}
module.exports = {
  randomArrayValue,
};
