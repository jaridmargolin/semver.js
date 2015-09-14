/*!
 * semver.js
 */


define(function (require) {


/* -----------------------------------------------------------------------------
 * helpers
 * ---------------------------------------------------------------------------*/

// Internal method utilzed by public facing methods in order to compare
// semver versions. Returns 1 is a > b. Returns -1 if b > a. Returns
// 0 if a == b.
var compare = function (a, b) {
  var pa = a.split('.');
  var pb = b.split('.');

  for (var i = 0; i < 3; i++) {
    na = Number(pa[i]);
    nb = Number(pb[i]);
    if (na > nb || !isNaN(na) && isNaN(nb)) {
      return 1;
    }
    if (na < nb || isNaN(na) && !isNaN(nb)) {
      return -1;
    }
  }

  return 0;
};


/* -----------------------------------------------------------------------------
 * semver
 * ---------------------------------------------------------------------------*/

return {

  /**
   * @public
   * @memberof semver
   *
   * @desc Determine if semver a > semver b.
   *
   * @example
   * semver.isGreater("1.0.0", "0.9.0");
   * // true
   *
   * @param {string} firstComparator - The semver string to compare with.
   * @param {string} secondComparator - The semver string to compare against.
   */
  isGreater: function (a, b) {
    return compare(a, b) === 1;
  },

  /**
   * @public
   * @memberof semver
   *
   * @desc Determine if semver a < semver b.
   *
   * @example
   * semver.isLess("0.9.0", "1.0.0");
   * // true
   *
   * @param {string} firstComparator - The semver string to compare with.
   * @param {string} secondComparator - The semver string to compare against.
   */
  isLess: function (a, b) {
    return compare(a, b) === -1;
  },

  /**
   * @public
   * @memberof semver
   *
   * @desc Determine if semver a === semver b.
   *
   * @example
   * semver.isEqual("1.0.0", "1.0.0");
   * // true
   *
   * @param {string} firstComparator - The semver string to compare with.
   * @param {string} secondComparator - The semver string to compare against.
   */

  /**
   * Determine if semver a == semver b.
   *
   * @public
   *
   * @param {string} firstComparator - The semver string to compare with.
   * @param {string} secondComparator - The semver string to compare against.
   */
  isEqual: function (a, b) {
    return compare(a, b) === 0;
  }

};


});