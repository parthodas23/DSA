class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const insert = (root, data) => {
  if (!root) return (root = new Node(data));

  let current = root;
  let value = new Node(data);
  while (true) {
    if (current.val > data) {
      if (!current.left) {
        current.left = value;
        break;
      }
      current = current.left;
    } else {
      if (!current.right) {
        current.right = value;
        break;
      }
      current = current.right;
    }
  }

  return root;
};
const root = new Node(11);
root.left = new Node(9);
root.right = new Node(12);
root.left.left = new Node(7);
root.left.right = new Node(10);

console.log(insert(root, 15));
