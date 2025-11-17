const sumRootLeaf = (root) => {
  if (!root) return 0;

  let totalNum = 0;

  const dfs = (node, currNum) => {
    if (!node) return;

    let newNum = currNum * 10 + node.val;

    if (!node.left && !node.right) {
      totalNum = totalNum + newNum;
      return;
    }

    dfs(node.left, newNum);
    dfs(node.right, newNum);
  };

  dfs(root, 0);
  return totalNum;
};
