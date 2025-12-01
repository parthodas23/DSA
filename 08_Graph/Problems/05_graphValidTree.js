const isValidGraphTree = (n, edges) => {
  if (edges.length !== n - 1) return false;

  const graph = Array.from({ length: n }, () => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  console.log(graph);
  let queue = [[0, -1]];
  let visited = new Set();
  while (queue.length) {
    let [node, parent] = queue.shift();

    visited.add(node);
    for (let nei of graph[node]) {
      if (nei === parent) continue; // detect wrong cycle detection
      if (visited.has(nei)) return false;
      queue.push([nei, node]);
    }
  }
  return visited.size === n;
};

console.log(
  isValidGraphTree(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
  ])
);
