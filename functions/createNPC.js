/**
 *
 * @param {String} fn (Str) Enter First Name
 * @param {String} ln (Str) Enter Last Name
 * @param {String} r1 (Str) Enter Race
 * @param {String} s (Str) Enter Sex
 * @param {Number} a (Int) Enter Age
 * @param {String} c (Str) Enter Home Continent
 * @param {String} r2 (Str) Enter Home Region
 * @param {String} l (Str) Enter Home Location
 * @param {String} lurl (Str) Enter Location URL
 * @param {String} oc (Str) Enter Occupation Category
 * @param {String} o (Str) Enter Occupation
 * @returns A constructed NPC object
 */
function NPC(fn, ln, r1, s, a, c, r2, l, lurl, oc, o) {
  this.firstName = String(fn);
  this.lastName = String(ln);
  this.race = String(r1);
  this.sex = String(s);
  this.age = Number(a);
  this.continent = String(c)
  this.region = String(r2)
  this.location = String(l)
  this.locationURL = String(lurl)
  this.occupationCategory = String(oc);
  this.occupation = String(o);
}
module.exports = {
  NPC,
};
