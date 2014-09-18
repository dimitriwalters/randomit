(function (root, randomit) {
	if (typeof exports === 'object') {
		module.exports = randomit();
	} else {
		root.randomit = randomit();
	}
}(this, function () {
	function generateRandomNumber(min, max) {
		return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
	}

	return {
		generateNumber: function(min, max, size) {
			if (size !== undefined) {
				var arr = [];

				for (var i=0; i<size; i++) {
					arr.push(generateRandomNumber(min, max));
				}

				return arr;
			}
			else if (min === undefined) {
				min = 1;
				max = 10;
			}
			else if (max === undefined) {
				max = min;
				min = 1;
			}

			return generateRandomNumber(min, max);
		}
	};
}));
