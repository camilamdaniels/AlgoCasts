// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn) {
	const cache = {};
	return function(...args) {
		if (cache[args]) return cache[args];
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
}

function fib(n) {
	// let series = [0, 1];
	// for (let i= 2; i <= n; i++) {
	// 	series.push(series[i - 1] + series[i - 2]);
	// }
	// // console.log(series);
	// return series[n];
	if (n < 2) {
		return n;
	}

	return fib(n - 2) + fib(n - 1);
}

let fastFib = memoize(fib);
console.log(fastFib(4));


module.exports = fib;
