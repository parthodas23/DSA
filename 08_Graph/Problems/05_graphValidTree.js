const isValidGraphTree = (n, edges) => {
  // a graph is a tree if
  // it's nodes length = n-1
  if (edges.length !== n - 1) return false;
  // all node's are connected, you can go any node to any other node
  const graph = {};
  for (let [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  // a node can't be appear 2 times
  let queue = [[-1, 0]];
  // connected doesn't mean we can't go to the parent, that's why we need skip to go to the parent again
  let visited = new Set();

  while (queue.length) {
    let [parent, node] = queue.shift();
    visited.add(node);

    for (let nei of graph[node]) {
      if (nei === parent) continue;

      // this means have cycle
      if (visited.has(nei)) return false;

      queue.push([node, nei]);
    }
  }

  return true;
};

console.log(
  isValidGraphTree(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
  ])
);
