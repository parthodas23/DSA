const diameter = (root) => {
  let dlength = 0;
  const depth = (root) => {
    if (!root) return 0;

    let left = depth(root.left);
    let right = depth(root.right);

    dlength = Math.max(dlength, left + right);

    return 1 + Math.max(left, right);
  };

  depth(root);

  return dlength;
};
