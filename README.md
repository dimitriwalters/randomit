# randomit

A small javascript library to generate random numbers in various situations along with other pieces of data which needs to be randomized.

## Installation

```
npm install randomit
```

or

```html
<script src="js/randomit.min.js"></script>
```

## Usage

```js
var randomit = require('randomit');

randomit.generateNumber();			// number between 1 to 10
randomit.generateNumber(10);		// number between 1 to 10
randomit.generateNumber(1, 10);		// number between 1 to 10
randomit.generateNumber(1, 10, 3);	// array of 3 numbers between 1 to 10
```

## License

Licensed under [MIT](http://opensource.org/licenses/MIT).
