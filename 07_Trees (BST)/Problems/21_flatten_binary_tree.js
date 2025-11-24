const flatten = (root) => {
  let prev = null;

  const dfs = (node) => {
    if (!node) return;

    dfs(node.right);
    dfs(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  };
  dfs(root);
};
