// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		let currNode = this;
		let currValue = this.data;
		while (data < currValue){
			if (currNode.left) {
				currNode = currNode.left;
				currValue = currNode.value;
			}
			currNode.left = new Node(data);
		} 
		
		while (data > currValue) {
			if (currNode.right) {
				currNode = currNode.right;
				currValue = currNode.value;
			}
			currNode.right = new Node(data);
		}
	}

	contains(data) {
		let currNode = this;
		let currValue = this.data;
		while (data < currValue) {
			if (currNode.left) {
				currNode = currNode.left;
				currValue = currNode.value;
			}
		}

		while(data > currValue) {
			if (currNode.right) {
				currNode = currNode.right;
				currValue = currNode.value;
			}
		}

		if (currValue === data) return currNode;
		else return null;
	}
}

module.exports = Node;
