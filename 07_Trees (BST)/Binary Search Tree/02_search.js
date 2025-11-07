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

const search = (root, data) => {
  let current = root;
  while (current && current.val !== data) {
    if (current.val > data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return current || data;
};

console.log(search(root, 7));
