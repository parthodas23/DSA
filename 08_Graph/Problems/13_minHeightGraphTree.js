const mht = (n, edges) => {
  if (n === 1) return [0];

  let graph = {};

  let degree = Array(n).fill(0);

  for (let [a, b] of edges) {
    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);

    degree[a]++;
    degree[b]++;
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      leaves.push(i);
    }
  }

  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;
    let newLeaves = [];
    for (let leaf of leaves) {
      for (let nei of graph[leaf]) {
        degree[nei]--;
        if (degree[nei] === 1) {
          console.log(nei);
          newLeaves.push(nei);
        }
      }
    }

    leaves = newLeaves;
  }

  return leaves;
};

console.log(
  mht(7, [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
  ])
);
