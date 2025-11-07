class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(11);
root.left = new Node(9);
root.right = new Node(12);
root.left.left = new Node(7);
root.left.right = new Node(10);

const height = (root) => {
  let tree = root;
  if (!tree) return 0;

  return 1 + Math.max(height(tree.left), height(tree.right));
  //   1 (for current node)
};

console.log(height(root));
