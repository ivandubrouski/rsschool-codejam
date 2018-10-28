var assert = require('assert');

const sumOfOther = require('../src/sumOfOther.js');
const make = require('../src/make.js');
const recursion = require('../src/recursion.js');


describe('Array', function() {
	describe('sumOfOther()', function() {
		it('should return [] when the value is []', function() {
			assert.deepEqual(sumOfOther([]), []);
		});
		it('should return [0] when there is the only one element in the array', function() {
			assert.deepEqual(sumOfOther([7]), [0]);
		});
		it('should return [9,8,7] when the value is [3,4,5]', function() {
			assert.deepEqual(sumOfOther([3,4,5]), [9,8,7]);
		});
		it('should return [5,4,3] when the value is [1,2,3]', function() {
			assert.deepEqual(sumOfOther([1,2,3]), [5,4,3]);
		});
		it('should return [40,35,25] when the value is [10,15,25]', function() {
			assert.deepEqual(sumOfOther([10,15,25]), [40,35,25]);
		});
	});

	describe('make()', function() {

		function sum(a, b) {
			return a + b;
		}

		it('should return 777', function() {
			assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
		});
		it('should return 762 when there is an empty argument', function() {
			assert.deepEqual(make()(34, 21, 604)(41)(sum), 700);
		});
		it('should return "undefined" when there is no arguments', function() {
			assert.deepEqual(make()(sum), undefined);
		});
		it('should return 2033', function() {
			assert.deepEqual(make(12)(24, 6, 1988)(3)(sum), 2033);
		});
		it('should return 22', function() {
			assert.deepEqual(make(22)(sum), 22);
		});
		it('should return 24', function() {
			assert.deepEqual(make(22)(2)(sum), 24);
		});
	});


	describe('recursion()', function() {

		let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},
		"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
		it('should return [[100], [90, 120], [70,99,110,130]]', function() {
			assert.deepEqual(recursion(tree), [[100], [90, 120], [70,99,110,130]]);
		});

		let tree1 = {"value":777};
		it('should return [[777]]', function() {
			assert.deepEqual(recursion(tree1), [[777]]);
		});

		let tree3 = {"value":1,"left":{"value":2,"left":{"value":70},"right":{"value":99}}};
		it('should return [[1], [2], [70,99]]', function() {
			assert.deepEqual(recursion(tree3), [[1], [2], [70,99]]);
		});
	});
});