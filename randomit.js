(function (root, randomit) {
	if (typeof exports === 'object') {
		module.exports = randomit();
	} else {
		root.randomit = randomit();
	}
}(this, function () {
	function generateRandomNumber(min, max) {
		var preciseMin = parseFloat(min),
			preciseMax = parseFloat(max),
			range = 0,
			randomNumInRange = 0;

		range = preciseMax - preciseMin;
		randomNumInRange = Math.floor(Math.random() * (range + 1));

		return randomNumInRange + preciseMin;
	}

	return {
		generateNumber: function(min, max, size) {
			var randomNumber = 0,
				arr = [];

			if (min === undefined) {
				min = 1;
				max = 10;
			} else if (max === undefined) {
				max = min;
				min = 1;
			}

			randomNumber = generateRandomNumber(min, max);

			if (size !== undefined) {
				arr.push(randomNumber);

				for (var i=1; i<size; i++) {
					randomNumber = generateRandomNumber(min, max);
					arr.push(randomNumber);
				}
			}

			return arr.length === 0 ? randomNumber : arr;
		},

		generateNumberDigits: function(digits, size) {
			var min = 0,
				max = 0,
				factor = 1,
				randomNumber = 0,
				arr = [];

			for (var i=1; i<digits; i++) {
				factor *= 10;
			}

			min = factor;
			max = (factor * 10) - 1;
			randomNumber = generateRandomNumber(min, max);

			if (size !== undefined) {
				arr.push(randomNumber);

				for (var j=1; j<size; j++) {
					randomNumber = generateRandomNumber(min, max);
					arr.push(randomNumber);
				}
			}

			return arr.length === 0 ? randomNumber : arr;
		},

		getRandomItem: function(arrInput, size) {
			var randomItem = 0,
				randomIndex = 0,
				length = arrInput.length,
				arrOutput = [];

			randomIndex = generateRandomNumber(0, length - 1);
			randomItem = arrInput[randomIndex];

			if (size !== undefined) {
				arrOutput.push(randomItem);

				for (var i=1; i<size; i++) {
					randomIndex = generateRandomNumber(0, length - 1);
					randomItem = arrInput[randomIndex];
					arrOutput.push(randomItem);
				}
			}

			return arrOutput.length === 0 ? randomItem : arrOutput;
		}
	};
}));
