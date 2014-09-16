var should = require('chai').should(),
    randomit = require('../index'),
    generateNumber = randomit.generateNumber;

describe('#generateNumber', function() {
  it('zero parameters', function() {
    for (var i=1; i<100; i++) {
      generateNumber().should.be.above(0);
      generateNumber().should.be.below(11);
    }
  });

  it('one parameter', function() {
    for (var i=1; i<100; i++) {
      generateNumber(10).should.be.above(0);
      generateNumber(10).should.be.below(11);
    }
  });

  it('two parameters on positive numbers', function() {
    for (var i=1; i<100; i++) {
      generateNumber(1, 10).should.be.above(0);
      generateNumber(1, 10).should.be.below(11);
    }
  });

  it('two parameters on positive and negative numbers', function() {
    for (var i=1; i<100; i++) {
      generateNumber(-10, 10).should.be.above(-11);
      generateNumber(-10, 10).should.be.below(11);
    }
  });
});