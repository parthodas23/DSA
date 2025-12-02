const isValidGraphTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  let graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = new Set();

  let queue = [[-1, 0]];
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
