const isValidBST = (root) => {
  if (!root) return false;

  let queue = [[root, -Infinity, Infinity]];
  while (queue.length) {
    let [node, min, max] = queue.shift();

    if (node.val >= max || node.val <= min) return false;

    if (node.left) queue.push([node.left, min, node.val]);
    if (node.right) queue.push([node.right, node.val, max]);
  }

  return true;
};
