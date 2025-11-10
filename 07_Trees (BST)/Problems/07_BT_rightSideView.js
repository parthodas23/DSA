const rightSideView = (root) => {
  if (!root) return [];

  let result = [];
  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      if (i === levelSize - 1) {
        // if it's the last value of this level it means this is the most right side value
        result.push(node.val);
      }
    }
  }

  return result;
};
