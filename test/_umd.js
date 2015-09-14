/*!
 * test/_umd.js
 */

define(function (require) {


/* -----------------------------------------------------------------------------
 * dependencies
 * ---------------------------------------------------------------------------*/

var assert = require('proclaim');
var semver = require('semver/semver');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('umd - semver.js', function () {

  it('Should expose methods.', function () {
    assert.ok(semver.isGreater);
    assert.ok(semver.isLess);
    assert.ok(semver.isEqual);
  });

});


});