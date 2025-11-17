const pathSum = (root, targetSum) => {
  if (!root) return false;

  const dfs = (node, sum) => {
    if (!node) return false;

    sum += node.val;

    if (!node.left && !node.right) return sum === targetSum;

    return dfs(node.left) || dfs(node.right);
  };

  return dfs(root, 0);
};
