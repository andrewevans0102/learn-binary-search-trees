const BSTNode = require("./BSTNode");

module.exports = class BSTGraph {
	#root = null;

	constructor(data) {
		this.root = new BSTNode(data, null);
	}

	add(data) {
		const node = this.root;
		if (node === null) {
			this.root = new BSTNode(data, null);
			return;
		} else {
			return this.placeNodeOnTree(node, data);
		}
	}

	placeNodeOnTree(node, data) {
		if (data < node.data) {
			if (node.left === null) {
				node.left = new BSTNode(data, node.data);
				return;
			} else if (node.left !== null) {
				return this.placeNodeOnTree(node.left, data);
			}
		} else if (data > node.data) {
			if (node.right === null) {
				node.right = new BSTNode(data, node.data);
				return;
			} else if (node.right !== null) {
				return this.placeNodeOnTree(node.right, data);
			}
		} else {
			return null;
		}
	}

	findNode(data) {
		let current = this.root;
		while (current.data !== data) {
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
			if (current === null) {
				return null;
			}
		}
		return current;
	}

	printTreeBySearch(node) {
		console.log(`node ${node.data} with parent ${node.parent}`);
		if (node.left !== null) {
			this.printTreeBySearch(node.left);
		}
		if (node.right !== null) {
			this.printTreeBySearch(node.right);
		}
		if (node === null) {
			return;
		}
	}

	printTree() {
		this.printTreeBySearch(this.root);
	}

	isPresent(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return true;
			}
			if (data < current.data) {
				current = current.left;
			} else {
				current = current.right;
			}
		}
		return false;
	}

	removeNode(node, data) {
		if (node == null) {
			return null;
		}
		if (data === node.data) {
			// node has no children
			if (node.left === null && node.right === null) {
				return null;
			}
			// node has no left child
			if (node.left === null) {
				return node.right;
			}
			// node has no right child
			if (node.right === null) {
				return node.left;
			}
			// node has two children
			let tempNode = node.right;
			while (tempNode.left !== null) {
				tempNode = tempNode.left;
			}
			node.data = tempNode.data;
			node.right = this.removeNode(node.right, tempNode.data);
			return node;
		} else if (data < node.data) {
			node.left = this.removeNode(node.left, data);
			return node;
		} else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data);
	}

	isBalanced() {
		return this.findMinHeight() >= this.findMaxHeight() - 1;
	}

	findMinHeight(node = this.root) {
		if (node == null) {
			return -1;
		}
		let left = this.findMinHeight(node.left);
		let right = this.findMinHeight(node.right);
		if (left < right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	findMaxHeight(node = this.root) {
		if (node == null) {
			return -1;
		}
		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);
		if (left > right) {
			return left + 1;
		} else {
			return right + 1;
		}
	}

	traverseInOrder(node, result) {
		if (node.left !== null) {
			this.traverseInOrder(node.left, result);
		}

		result.push(node.data);

		if (node.right !== null) {
			this.traverseInOrder(node.right, result);
		}
	}

	traversePreOrder(node, result) {
		result.push(node.data);
		if (node.left !== null) {
			this.traversePreOrder(node.left, result);
		}
		if (node.right !== null) {
			this.traversePreOrder(node.right, result);
		}
	}

	traversePostOrder(node, result) {
		if (node.left !== null) {
			this.traversePostOrder(node.left, result);
		}
		if (node.right !== null) {
			this.traversePostOrder(node.right, result);
		}
		result.push(node.data);
	}

	// smallest to largest
	inOrder() {
		if (this.root == null) {
			return null;
		} else {
			const result = [];

			this.traverseInOrder(this.root, result);
			return result;
		}
	}

	// roots before leaves
	preOrder() {
		if (this.root == null) {
			return null;
		} else {
			const result = [];

			this.traversePreOrder(this.root, result);
			return result;
		}
	}

	// leaves before roots
	postOrder() {
		if (this.root == null) {
			return null;
		} else {
			const result = [];

			this.traversePostOrder(this.root, result);
			return result;
		}
	}

	// breadth first search
	levelOrder() {
		let result = [];
		let Q = [];
		if (this.root != null) {
			Q.push(this.root);
			while (Q.length > 0) {
				let node = Q.shift();
				result.push(node.data);
				if (node.left != null) {
					Q.push(node.left);
				}
				if (node.right != null) {
					Q.push(node.right);
				}
			}
			return result;
		} else {
			return null;
		}
	}
};
