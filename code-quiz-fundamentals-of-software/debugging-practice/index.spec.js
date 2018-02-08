/* global chai sinon */
"use strict"

mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();


//////////////////////////////////////////////////////////////////////
//              WRITE YOUR TESTS BELOW HERE
/* globals someFunc */

describe('debugging-practice', function () {

    it('should exist', function() {
      should.exist(correct);
      should.exist(main);
    });

    it('correct should be true', function() {
      expect(correct).to.be.true;
    })

    it('should print \'It\'s correct\' to the console', function () {
      var spy = sinon.spy(console, 'log');
      expect(main).to.be.a('function');
      main();
      assert(spy.calledWith("It's correct!"));
      spy.restore;
      
    });

  });
