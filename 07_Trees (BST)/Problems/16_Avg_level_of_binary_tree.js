const avgLevel = (root) => {
  if (!root) return [];

  let queue = [root];
  let result = [];
  let index = 0; // for accessing level value without shift

  while (index < queue.length) {
    let levelSum = 0;
    let levelSize = queue.length - index;

    for (let i = 0; i < levelSize; i++) {
      let node = queue[index++]; // in here 1st --> queue[0] then increaed by 1, means 1st collect 0 then increase
      levelSum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(levelSum / levelSize);
  }

  return result;
};
