// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	str = str.split(" ");

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].split("");
		str[i][0] = str[i][0].toUpperCase();
		str[i] = str[i].join("");
	}

	return str.join(" ");
}

console.log(capitalize('a short sentence'))
console.log(capitalize('a lazy fox'))
console.log(capitalize('look, it is working!'))

module.exports = capitalize;
