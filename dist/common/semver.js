/*!
 * semver.js
 */





/* -----------------------------------------------------------------------------
 * semver
 * ---------------------------------------------------------------------------*/

/**
 * @global
 * @public
 * @namespace semver
 *
 * @desc Lightweight module to compare semver versions.
 */
module.exports = {

  /**
   * @public
   * @memberof semver
   *
   * @desc Compare two semver values. Optionally accepts param to force
   *   comparison based on passed specificity (major, minor, patch).
   *
   * @param {string} firstComparator - The semver string to compare with.
   * @param {string} secondComparator - The semver string to compare against.
   * @param {string} [specificity=patch] - major || minor || patch.
   */
  compare: function (a, b, specificity) {
    var pa = a.split('.');
    var pb = b.split('.');
    var sentinels = {
      'major': 1,
      'minor': 2,
      'patch': 3
    };

    for (var i = 0; i < (sentinels[specificity] || 3); i++) {
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
  },

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
   * @param {string} [specificity=patch] - major || minor || patch.
   */
  isGreater: function (a, b, specificity) {
    return this.compare(a, b, specificity) === 1;
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
   * @param {string} [specificity=patch] - major || minor || patch.
   */
  isLess: function (a, b, specificity) {
    return this.compare(a, b, specificity) === -1;
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
   * @param {string} [specificity=patch] - major || minor || patch.
   */
  isEqual: function (a, b, specificity) {
    return this.compare(a, b, specificity) === 0;
  }

};


