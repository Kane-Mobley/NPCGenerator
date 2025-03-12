/**
 *
 * @param {String} fn (Str) Enter First Name
 * @param {String} ln (Str) Enter Last Name
 * @param {String} r (Str) Enter Race
 * @param {String} s (Str) Enter Sex
 * @param {Number} a (Int) Enter Age
 * @param {String} oc (Str) Enter Occupation Category
 * @param {String} o (Str) Enter Occupation
 * @returns A constructed NPC object
 */
function NPC(fn, ln, r, s, a, oc, o) {
  this.firstName = String(fn);
  this.lastName = String(ln);
  this.race = String(r);
  this.sex = String(s);
  this.age = Number(a);
  this.occupationCategory = String(oc);
  this.occupation = String(o);
}
module.exports = {
  NPC,
};
