class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = node;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = node;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  invert() {
    const invertNode = (node) => {
      if (!node) return;

      // Swap the left and right children
      let temp = node.left;
      node.left = node.right;
      node.right = temp;

      // Recursively invert the left and right subtrees
      invertNode(node.left);
      invertNode(node.right);
    };

    invertNode(this.root);
    return this.root;
  }
}

// [4, 2, 7, 1, 3, 6, 9];
const tree = new Tree();
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(9);
// tree.insert(1);
// tree.insert(1);

console.log(tree.invert());



// console.log(JSON.stringify(tree, null, 2));
