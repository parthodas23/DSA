const dfs = (root) => {
  if (!root) return 0;
  let stack = [{ node: root, depth: 1 }];
  let maxDepth = 0;
  while (stack.length) {
    let curr = stack.pop();
    let currNode = curr.node;
    if (currNode.left) {
      stack.push({ node: currNode.left, depth: curr.depth + 1 });
    }
    if (currNode.right) {
      stack.push({ node: currNode.right, depth: curr.depth + 1 });
    }

    maxDepth = Math.max(maxDepth, curr.depth);
  }

  return maxDepth;
};
