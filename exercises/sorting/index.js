// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let mindex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[mindex]) mindex = j;
		}
		if (mindex !== i) {
			let temp = arr[i];
			arr[i] = arr[mindex];
			arr[mindex] = temp;
		}
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length < 2) return arr;

	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let merged = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) merged.push(left.shift());
		else merged.push(right.shift());
	}

	while (left.length)
		merged.push(left.shift());

	while (right.length)
		merged.push(right.shift());

	return merged;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
