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
		if (this.head) this.head = this.head.next;
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

	insertLast(data) {
		const last = this.getLast();

		if (last) last.next = new Node(data);
		else this.head = new Node(data);
	}

	getAt(index) {
		let currNode = this.head;
		let count = 0;
		while (currNode) {
			if (count === index) return currNode;
			count++;
			currNode = currNode.next;
		}
		return null;
	}

	removeAt(index) {
		if (index === 0) this.removeFirst();
		else if (index === this.size() - 1) this.removeLast();
		else if (!this.head) return;
		else {
			let node = this.getAt(index - 1);
			if (node.next) node.next = node.next.next;
		}	
	}

	insertAt(data, index) {
		if (index > this.size()) this.insertLast(data);
		else if (index === 0) this.insertFirst(data);
		else {
			let prev = this.getAt(index - 1);
			let newNext = prev.next;
			prev.next = new Node(data, newNext);
		}
	}
}

module.exports = { Node, LinkedList };
