const zigzagLevel = (root) => {
  if (!root) return [];

  let queue = [root];
  let count = 0;
  let result = [];

  while (queue.length) {
    let level = [];
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (count % 2 === 1) {
      level.reverse();
    }

    result.push(level);
    count++;
  }

  return result;
};
