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

	getLast() {
		let currNode = this.head;
		let last;
		while (currNode) {
			last = currNode;
			currNode = currNode.next;
		}

		return last;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.head = this.head.next;
	}

	removeLast() {
		let currNode = this.head;
		let prev;

		if (!currNode) return;

		if (currNode.next === null) this.head = null;
		
		while (currNode && currNode.next) {
			prev = currNode;
			currNode = currNode.next;
			if (currNode.next === null) prev.next = null;
		}
	}
}

module.exports = { Node, LinkedList };
