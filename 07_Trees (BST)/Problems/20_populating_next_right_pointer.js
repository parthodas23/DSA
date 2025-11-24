const isNextRight = (root) => {
  if (!root) return root;
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    let prev = null;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (prev) prev.next = node;
      prev = node;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    prev.next = null;
  }

  return root;
};
