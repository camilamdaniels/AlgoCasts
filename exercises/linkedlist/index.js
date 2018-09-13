// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		if (!this.head) this.head = new Node(data);
		else {
			let newHead = new Node(data, this.head);
			this.head = newHead;
		}
	}

	size() {
		let currNode = this.head;
		let count = 0;
		while (currNode) {
			count++;
			currNode = currNode.next;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}
}

module.exports = { Node, LinkedList };
