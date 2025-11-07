class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
// BST is structured (as per its definition), that the right child is always larger than the parent and the left child is always lesser.
const root = new Node(11);
root.left = new Node(9);
root.right = new Node(12);
root.left.left = new Node(7);
root.left.right = new Node(10);

console.log(root);
