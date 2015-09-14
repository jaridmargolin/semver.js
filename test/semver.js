/*!
 * test/semver.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var sinon = require('sinon');
var semver = require('semver');


/* -----------------------------------------------------------------------------
 * helpers
 * ---------------------------------------------------------------------------*/

var assertGreaterCases = function (comparator, methodName) {
  assert[methodName](semver[comparator]('1', '0'));
  assert[methodName](semver[comparator]('1.1', '1.0'));
  assert[methodName](semver[comparator]('1.1.1', '1.1.0'));
};

var assertLessCases = function (comparator, methodName) {
  assert[methodName](semver[comparator]('0', '1'));
  assert[methodName](semver[comparator]('1.0', '1.1'));
  assert[methodName](semver[comparator]('1.1.0', '1.1.1'));
};

var assertEqualCases = function (comparator, methodName) {
  assert[methodName](semver[comparator]('1', '1'));
  assert[methodName](semver[comparator]('1.1', '1.1'));
  assert[methodName](semver[comparator]('1.1.1', '1.1.1'));
};


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('semver.js', function () {

  /* ---------------------------------------------------------------------------
   * isGreater
   * -------------------------------------------------------------------------*/

  describe('isGreater()', function () {

    it('Should return true if a > b.', function () {
      assertGreaterCases('isGreater', 'isTrue');
    });

    it('Should return false if a > b.', function () {
      assertLessCases('isGreater', 'isFalse');
    });

    it('Should return false if a == b.', function () {
      assertEqualCases('isGreater', 'isFalse');
    });

  });


  /* ---------------------------------------------------------------------------
   * isLess
   * -------------------------------------------------------------------------*/

  describe('isGreater()', function () {

    it('Should return false if a > b.', function () {
      assertGreaterCases('isLess', 'isFalse');
    });

    it('Should return true if a > b.', function () {
      assertLessCases('isLess', 'isTrue');
    });

    it('Should return false if a == b.', function () {
      assertEqualCases('isLess', 'isFalse');
    });

  });


  /* ---------------------------------------------------------------------------
   * isEqual
   * -------------------------------------------------------------------------*/

  describe('isGreater()', function () {

    it('Should return false if a > b.', function () {
      assertGreaterCases('isEqual', 'isFalse');
    });

    it('Should return false if a > b.', function () {
      assertLessCases('isEqual', 'isFalse');
    });

    it('Should return true if a == b.', function () {
      assertEqualCases('isEqual', 'isTrue');
    });

  });

});


});