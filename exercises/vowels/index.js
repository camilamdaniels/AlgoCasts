// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	// let vowelCount = {
	// 	'a': 0,
	// 	'e': 0,
	// 	'i': 0,
	// 	'o': 0,
	// 	'u': 0
	// }

	// for (let char of str) {
	// 	char = char.toLowerCase();
	// 	if (vowelCount.hasOwnProperty(char)) {
	// 		vowelCount[char] = vowelCount[char] + 1;
	// 	}
	// }

	// let count = Object.values(vowelCount).reduce((a, b) => {
	// 	return a + b;
	// });

	// return count;
	str = str.toLowerCase();
	return (str.match(/[aeiou]/g)) ? str.match(/[aeiou]/g).length : 0;
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))

module.exports = vowels;
