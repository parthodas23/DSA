const hasPathSum = (root, targetSum) => {
  if (!root) return false;

  const dfs = (node, sum) => {
    if (!node) return false;

    sum += node.val;

    if (!node.left && !node.right) {
      return sum === targetSum;
    }

    return dfs(node.left, sum) || dfs(node.right, sum);
  };

  return dfs(root, 0);
};
