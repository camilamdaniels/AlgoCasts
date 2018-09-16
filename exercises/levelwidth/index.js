// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let queue = [root, null];
	let widths = [0];
	while (queue.length > 1) {
		let node = queue.shift();
		if (!node) {
			widths.push(0);
			queue.push(null);
		} else {
			queue.push(...node.children);
			widths[widths.length - 1]++;
		}
	}
	return widths;
}

module.exports = levelWidth;
