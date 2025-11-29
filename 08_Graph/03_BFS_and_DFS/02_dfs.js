const graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

const dfs = (graph, node, visited = new Set()) => {
  if (visited.has(node)) return;

  visited.add(node);
  console.log(node);

  for (let neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }

  return visited;
};

console.log(dfs(graph, 1));
