const countNodes = (root) => {
  if (!root) return 0;

  const leftHeight = (node) => {
    if (!node) return 0;

    let h = 0;
    while (node) {
      h++;
      node = node.next;
    }
    return h;
  };

  const rightHeight = (node) => {
    if (!node) return 0;
    let h = 0;

    while (node) {
      h++;
      node = node.next;
    }

    return h;
  };

  let lh = leftHeight(root);
  let rh = rightHeight(root);

  if (lh === rh) {
    return Math.pow(2, lh) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};
