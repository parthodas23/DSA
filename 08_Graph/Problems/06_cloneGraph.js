const clone = (node) => {
  if (!node) return null;

  let queue = [node];
  let map = new Map();
  map.set(node, new _Node(node.val));

  while (queue.length) {
    let curr = queue.shift();

    for (let nei of curr.neighbors) {
      if (!map.has(nei)) {
        map.set(nei, new _Node(nei.val));
        queue.push(nei);
      }

      map.get(curr).neighbors.push(map.get(nei));
    }
  }

  return map.get(node);
};
