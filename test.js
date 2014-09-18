var assert = require('assert');
var ensureRange = require('./index');

describe('ensure-range', function() {
	it('[1, 3]', function() {
		assert.equal(ensureRange(1, 3, 3), 3);
		assert.equal(ensureRange(1, 3, 1), 1);
		assert.equal(ensureRange(1, 3, 2), 2);
		assert.equal(ensureRange(1, 3, -1), 1);
		assert.equal(ensureRange(1, 3, 4), 3);
	});

	it('[1, 1]', function() {
		assert.equal(ensureRange(1, 1, 3), 1);
		assert.equal(ensureRange(1, 1, 1), 1);
	});

	it('[1, -1]', function() {
		assert.throws(function() {
			ensureRange(1, -1, 3)
		}, function(err) {
			return true;
		});
	});

	it('(..., 1]', function() {
		assert.equal(ensureRange(undefined, 1, 3), 1);
		assert.equal(ensureRange(undefined, 1, -1), -1);
	});

	it('[1, ...)', function() {
		assert.equal(ensureRange(1, undefined, 3), 3);
		assert.equal(ensureRange(1, undefined, -1), 1);
	});
});
