var _ = require('underscore');

var _ok = function(num) {
	return _.isNumber(num) && !_.isNaN(num);
}

module.exports = function(left, right, number) {
	if(_ok(left) && _ok(right) && left > right) {
		throw new Error('left bound should not greater bound than right');
	}

	if(_ok(left)) {
		number = Math.max(number, left);
	}

	if(_ok(right)) {
		number = Math.min(number, right);
	}

	return number;
}
