const minDiff = (root) => {
  let minDiff = Infinity;
  let prev = null;

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    if (prev !== null) {
      minDiff = Math.min(minDiff, node.val - prev);
    }
    prev = node.val;

    inorder(node.right);
  };
  inorder(root);

  return minDiff;
};
