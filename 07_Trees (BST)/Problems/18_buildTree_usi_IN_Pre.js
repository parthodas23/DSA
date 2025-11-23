const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;

  let map = {};
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  let preorderIndex = 0;

  const tree = (left, right) => {
    if (left > right) return null;

    let rootValue = preorder[preorderIndex++];

    let root = new TreeNode(rootValue);

    let inorderIndex = map[rootValue];

    root.left = tree(left, inorderIndex - 1);
    root.right = tree(inorderIndex + 1, right);

    return root;
  };

  return tree(0, inorder.length - 1);
};
