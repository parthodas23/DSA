const maxPathSum = (root) => {
  let globalMax = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;

    let left = Math.max(dfs(node.left), 0);
    let right = Math.max(dfs(node.right), 0);

    let currSum = node.val + left + right;

    globalMax = Math.max(globalMax, currSum);

    return node.val + Math.max(left, right); // cause after finish a path we can continue with one direction not both
  };

  dfs(root);

  return globalMax;
};
