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
 * test
 * ---------------------------------------------------------------------------*/

describe('semver.js', function () {

  /* ---------------------------------------------------------------------------
   * compare
   * -------------------------------------------------------------------------*/

  describe('compare()', function () {

    it('Should return 0 if a === b.', function () {
      assert.equal(0, semver.compare('1', '1'));
      assert.equal(0, semver.compare('1.1', '1.1'));
      assert.equal(0, semver.compare('1.1.1', '1.1.1'));

      assert.equal(0, semver.compare('1.2.1', '1.1.1', 'major'));
      assert.equal(0, semver.compare('1.1.2', '1.1.1', 'minor'));
      assert.equal(0, semver.compare('1.1.1', '1.1.1', 'patch'));
    });

    it('Should return 1 if a > b.', function () {
      assert.equal(1, semver.compare('2', '1'));
      assert.equal(1, semver.compare('1.2', '1.1'));
      assert.equal(1, semver.compare('1.1.2', '1.1.1'));

      assert.equal(1, semver.compare('2.1.1', '1.1.1', 'major'));
      assert.equal(1, semver.compare('1.2.1', '1.1.1', 'minor'));
      assert.equal(1, semver.compare('1.1.2', '1.1.1', 'patch'));
    });

    it('Should return -1 if a < b.', function () {
      assert.equal(-1, semver.compare('1', '2'));
      assert.equal(-1, semver.compare('1.1', '1.2'));
      assert.equal(-1, semver.compare('1.1.1', '1.1.2'));

      assert.equal(-1, semver.compare('1.1.1', '2.1.1', 'major'));
      assert.equal(-1, semver.compare('1.1.1', '1.2.1', 'minor'));
      assert.equal(-1, semver.compare('1.1.1', '1.1.2', 'patch'));
    });

  });


  /* ---------------------------------------------------------------------------
   * isGreater
   * -------------------------------------------------------------------------*/

  describe('isGreater()', function () {

    it('Should return true if a > b.', function () {
      assert.isTrue(semver.isGreater('2', '1'));
    });

    it('Should return false if a < b.', function () {
      assert.isFalse(semver.isGreater('1', '2'));
    });

    it('Should return false if a == b.', function () {
      assert.isFalse(semver.isGreater('1', '1'));
    });

  });


  /* ---------------------------------------------------------------------------
   * isLess
   * -------------------------------------------------------------------------*/

  describe('isLess()', function () {

    it('Should return false if a > b.', function () {
      assert.isFalse(semver.isLess('2', '1'));
    });

    it('Should return true if a < b.', function () {
      assert.isTrue(semver.isLess('1', '2'));
    });

    it('Should return false if a == b.', function () {
      assert.isFalse(semver.isLess('1', '1'));
    });

  });


  /* ---------------------------------------------------------------------------
   * equal
   * -------------------------------------------------------------------------*/

  describe('equal()', function () {

    it('Should return false if a > b.', function () {
      assert.isFalse(semver.isEqual('2', '1'));
    });

    it('Should return false if a < b.', function () {
      assert.isFalse(semver.isEqual('1', '2'));
    });

    it('Should return true if a == b.', function () {
      assert.isTrue(semver.isEqual('1', '1'));
    });

  });

});


});