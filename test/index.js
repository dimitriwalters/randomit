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

  it('array of size 3 on positive numbers', function() {
    var arr = [],
        i = 1,
        j = 1;

    for (i=1; i<100; i++) {
      arr = generateNumber(1, 10, 3);

      arr.should.have.length(3);
      for (j=1; j<3; j++) {
        arr[j].should.be.above(0);
        arr[j].should.be.below(11);
      }
    }
  });

  it('array of size 10 on positive and negative numbers', function() {
    var arr = [],
        i = 1,
        j = 1;

    for (i=1; i<100; i++) {
      arr = generateNumber(-10, 10, 10);

      arr.should.have.length(10);
      for (j=1; j<10; j++) {
        arr[j].should.be.above(-11);
        arr[j].should.be.below(11);
      }
    }
  });
});