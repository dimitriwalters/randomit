module.exports = {

	generateNumber: function(min, max) {
		if (min === undefined) {
			min = 1;
			max = 10;
		}
		else if (max === undefined) {
			max = min;
			min = 1;
		}

		return Math.floor(Math.random() * (parseFloat(max) - parseFloat(min) + 1)) + parseFloat(min);
	}

};