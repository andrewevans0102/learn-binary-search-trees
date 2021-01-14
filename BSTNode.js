module.exports = class BSTNode {
	constructor(data, parent, left = null, right = null) {
		this.data = data;
		this.parent = parent;
		this.left = left;
		this.right = right;
	}
};
