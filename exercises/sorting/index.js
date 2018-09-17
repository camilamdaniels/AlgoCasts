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

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
