// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	let objA = {};
	let objB = {};

	stringA = stringA.replace(/[^a-zA-Z]/g, '').toLowerCase();
	stringB = stringB.replace(/[^a-zA-Z]/g, '').toLowerCase();

	for (let char of stringA) {
		if (!objA.hasOwnProperty(char)) objA[char] = 1;
		else objA[char] = objA[char] + 1;
	}

	for (let char of stringB) {
		if (!objB.hasOwnProperty(char)) objB[char] = 1;
		else objB[char] = objB[char] + 1;
	}

	const aKeys = Object.keys(objA).sort();
	const bKeys = Object.keys(objB).sort();
	const aValues = Object.values(objA).sort();
	const bValues = Object.values(objB).sort();

	for (let i = 0; i < aKeys.length; i++) {
		if (aKeys[i] !== bKeys[i]) return false;
	}

	for (let i = 0; i < aValues.length; i++) {
		if (aValues[i] !== bValues[i]) return false;
	}

	return true;
}

console.log(anagrams('rail safety', 'fairy tales'))
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'))
console.log(anagrams('Hi there', 'Bye there'))

module.exports = anagrams;
