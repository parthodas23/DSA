class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(11);
root.left = new Node(9);
root.right = new Node(12);
root.left.left = new Node(7);
root.left.right = new Node(10);
root.left.left.left = new Node(5);

const findMIn = (root) => {
  let node = root;
  while (node && node.left) {
    node = node.left;
  }

  return node;
};

const deleteOp = (root, key) => {
  if (!root) return null;

  if (root.val > key) {
    root.left = deleteOp(root.left, key);
  } else if (root.val < key) {
    root.right = deleteOp(root.right, key);
  } else {
    // means found the key

    // no child
    if (!root.left && !root.right) return null;

    // one child
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    // two child
    const successor = findMIn(root.right); // right chaild can be the only parent cause it's bigger than left
    root.val = successor.val;
    root.right = deleteOp(root.right, successor.val);
  }

  return root;
};

console.log(deleteOp(root, 9));
