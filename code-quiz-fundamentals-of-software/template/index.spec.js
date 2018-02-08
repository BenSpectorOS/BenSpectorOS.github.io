/* global chai sinon */
"use strict"

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();


//////////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
/* globals someFunc */

describe('Template', function () {
  describe('range()', function () {
    it('should exist', function () {
      expect(range).to.be.a('function');
    });
  });
});
