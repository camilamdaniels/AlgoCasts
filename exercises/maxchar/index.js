// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// console.log(maxChar("abcccccccd"));
// console.log(maxChar("apple 1231111"));

function maxChar(str) {
	let obj = {};
	for (let char of str) {
		if (!obj.hasOwnProperty(char)) obj[char] = 1;
		else obj[char] = obj[char]+=1;
	}

	// console.log(obj);

	let keys = Object.keys(obj);
	let max = 0;
	let maxChar;

	for (let key of keys) {
		if (obj[key] > max) {
			max = obj[key]; 
			maxChar = key;
		}
	}

	return maxChar;
}

module.exports = maxChar;
