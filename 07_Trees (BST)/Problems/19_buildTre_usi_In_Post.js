const buildTree = (inorder, postorder) => {
  if (!inorder.length || !postorder) return null;

  let map = {};
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  let postorderIndex = postorder.length - 1;

  const tree = (left, right) => {
    if (left > right) return null;

    let rootValue = postorder[postorderIndex--];
    let root = new TreeNode(rootValue);

    let inorderIndex = map[rootValue];

    root.right = tree(inorderIndex + 1, right);
    root.left = tree(left, inorderIndex - 1);

    return root;
  };

  return tree(0, inorder.length-1);
};
