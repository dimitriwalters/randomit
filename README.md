# randomit

A small javascript library to generate random numbers in various situations along with other pieces of data which needs to be randomized.

## Installation

```
npm install randomit
```

or

```html
<script src="http://dimitriwalters.github.io/randomit/randomit.min.js"></script>
```

## Usage

```js
var randomit = require('randomit');

randomit.generateNumber();          // number between 1 to 10
randomit.generateNumber(10);        // number between 1 to 10
randomit.generateNumber(1, 10);     // number between 1 to 10
randomit.generateNumber(1, 10, 3);  // array with 3 numbers between 1 to 10

randomit.generateNumberDigits(2);       // number with two digits
randomit.generateNumberDigits(2, 3);    // array with 3 two-digit numbers

randomit.getRandomItem([0, 1, 2, 3, 5]);                    // one of those fibonacci numbers
randomit.getRandomItem(['Hi!', 'Hey!', 'Hello!', 'Ahoy!']); // one of those greetings
randomit.getRandomItem([0, 1, 2, 3, 5], 3);                 // array with three of those numbers
```

## License

Licensed under [MIT](http://opensource.org/licenses/MIT).
