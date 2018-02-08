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
      should.exist(logThis);
    });
    
    it('logThis should be a function', function() {
      expect(logThis).to.be.a('function');
    });

    it('should print a value to the console', function() {
      var spy = sinon.spy(console, 'log');
      logThis("hey!");
      assert(spy.calledWith("hey!"));
      
      logThis("what's up!");
      assert(spy.calledWith("what's up!"));
      
      var randomNum = Math.floor(Math.random() * 10);
      logThis(randomNum);
      assert(spy.calledWith(randomNum));
      spy.restore();
    })
  });
