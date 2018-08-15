// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	
	for (let i = 0; i < n; i++) {
		let step = new Array(2*n).join(" ").split("");
		let middle = Math.floor(step.length/2);
		for (let j = middle - i; j <= middle + i; j++) {
			step[j] = '#';
		}
		console.log(step.join(""));
	}
}

pyramid(3);
pyramid(4);
pyramid(5);

module.exports = pyramid;
