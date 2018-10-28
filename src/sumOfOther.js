module.exports = function sumOfOther(array) {
	let arr = array;
	let sum = arr.reduce((sum, current) => sum + current, 0);
	return arr.map(item => sum - item);
}