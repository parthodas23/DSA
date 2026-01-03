const isValidGraphTree = (n, edges) => {
  if (edges.length !== n - 1) return false;
  const graph = {};
  for (let [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  let queue = [[-1, 0]];
  let visited = new Set();

  while (queue.length) {
    let [parent, node] = queue.shift();
    visited.add(node);

    for (let nei of graph[node]) {
      if (nei === parent) continue;

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

console.log(
  isValidGraphTree(4, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
  ])
);
