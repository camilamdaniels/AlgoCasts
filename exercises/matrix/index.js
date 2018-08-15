// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function fillColumn(matrix, i, arr) {
	// let column = [];
	for (let row = 0; row < matrix.length; row++) {
		matrix[row][i] = arr[i];
	}
	// return column;
}

function fillRow(matrix, i, arr) {
	let row = matrix[i];
	row = arr;
}

function matrix(n) {
	let matrix = [];
	for (let i = 0; i < n; i++) {
		matrix[i] = new Array(n);
	}
	let count = 1;

	let firstRow = 0;
	let lastColumn = n - 1;
	let lastRow = n - 1;
	let firstColumn = 0;

	while (firstRow <= lastRow && firstColumn <= lastColumn) {
		// top row
		for (let i = firstColumn; i<= lastColumn; i++) {
			matrix[firstRow][i] = count;
			count++;
		}
		firstRow++;

		for (let i = firstRow; i <= lastRow; i++) {
			matrix[i][lastColumn] = count;
			count++;
		}
		lastColumn--;

		for (let i = lastColumn; i >= firstColumn; i--) {
			matrix[lastRow][i] = count;
			count++
		}
		lastRow--;

		for (let i = lastRow; i >= firstRow; i--) {
			matrix[i][firstColumn] = count;
			count++;
		}
		firstColumn++;
	}
	return matrix;
}

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));

// let matrix1 = [[1, 2], [4, 3]];
// let matrix2 = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
// let matrix3 = [[1,   2,  3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10,  9,  8, 7]]

// console.log(getRow(matrix1, 1));
// console.log(getRow(matrix3, 2));
// console.log(getColumn(matrix2, 2));
// console.log(getColumn(matrix3, 1));

module.exports = matrix;
