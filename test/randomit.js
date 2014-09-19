var should = require('chai').should(),
    randomit = require('../randomit.min.js'),
    generateNumber = randomit.generateNumber,
    generateNumberDigits = randomit.generateNumberDigits,
    getRandomItem = randomit.getRandomItem;

describe('#generateNumber', function() {
    it('zero parameters', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumber();
            randomNumber.should.be.above(0);
            randomNumber.should.be.below(11);
        }
    });

    it('one parameter', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumber(10);
            randomNumber.should.be.above(0);
            randomNumber.should.be.below(11);
        }
    });

    it('two parameters on positive numbers', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumber(1, 10);
            randomNumber.should.be.above(0);
            randomNumber.should.be.below(11);
        }
    });

    it('two parameters on positive and negative numbers', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumber(-10, 10);
            randomNumber.should.be.above(-11);
            randomNumber.should.be.below(11);
        }
    });

    it('array of size 3 on positive numbers', function() {
        var arr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            arr = generateNumber(1, 10, 3);

            arr.should.have.length(3);
            for (j=0; j<3; j++) {
                arr[j].should.be.above(0);
                arr[j].should.be.below(11);
            }
        }
    });

    it('array of size 7 on positive and negative numbers', function() {
        var arr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            arr = generateNumber(-10, 10, 7);

            arr.should.have.length(7);
            for (j=0; j<7; j++) {
                arr[j].should.be.above(-11);
                arr[j].should.be.below(11);
            }
        }
    });
});

describe('#generateNumberDigits', function() {
    it('one digit numbers', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumberDigits(1);
            randomNumber.should.be.above(0);
            randomNumber.should.be.below(10);
        }
    });

    it('three digit numbers', function() {
        var randomNumber = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomNumber = generateNumberDigits(3);
            randomNumber.should.be.above(99);
            randomNumber.should.be.below(1000);
        }
    });

    it('array of size 3 on two digit numbers', function() {
        var arr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            arr = generateNumberDigits(2, 3);

            arr.should.have.length(3);
            for (j=0; j<3; j++) {
                arr[j].should.be.above(9);
                arr[j].should.be.below(100);
            }
        }
    });

    it('array of size 7 on four digit numbers', function() {
        var arr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            arr = generateNumberDigits(4, 7);

            arr.should.have.length(7);
            for (j=0; j<7; j++) {
                arr[j].should.be.above(999);
                arr[j].should.be.below(10000);
            }
        }
    });
});

describe('#getRandomItem', function() {
    it('array of numbers', function() {
        var arr = [0, 1, 2, 3, 5],
            randomItem = 0,
            i = 0;

        for (i=0; i<1000; i++) {
            randomItem = getRandomItem(arr);
            arr.indexOf(randomItem).should.not.equal(-1);
        }
    });

    it('array of strings', function() {
        var arr = ['Hi!', 'Hey!', 'Hello!', 'Ahoy!'],
            randomItem = '',
            i = 0;

        for (i=0; i<1000; i++) {
            randomItem = getRandomItem(arr);
            arr.indexOf(randomItem).should.not.equal(-1);
        }
    });

    it('array of size 3 from array of numbers', function() {
        var arr = [0, 1, 2, 3, 5],
            newArr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            newArr = getRandomItem(arr, 3);

            newArr.should.have.length(3);
            for (j=0; j<3; j++) {
                arr.indexOf(newArr[j]).should.not.equal(-1);
            }
        }
    });

    it('array of size 3 from array of strings', function() {
        var arr = ['Hi!', 'Hey!', 'Hello!', 'Ahoy!'],
            newArr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            newArr = getRandomItem(arr, 3);

            newArr.should.have.length(3);
            for (j=0; j<3; j++) {
                arr.indexOf(newArr[j]).should.not.equal(-1);
            }
        }
    });

    it('array of size 7 from array of numbers', function() {
        var arr = [0, 1, 2, 3, 5],
            newArr = [],
            i = 0,
            j = 0;

        for (i=0; i<1000; i++) {
            newArr = getRandomItem(arr, 7);

            newArr.should.have.length(7);
            for (j=0; j<7; j++) {
                arr.indexOf(newArr[j]).should.not.equal(-1);
            }
        }
    });
});
