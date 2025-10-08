// if you want to know what bfs is go to the notion note
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bfs = (root) => {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // visited node
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }

  return result;
};

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

console.log(bfs(root));
