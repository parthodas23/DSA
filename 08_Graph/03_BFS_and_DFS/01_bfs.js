const graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

const bfs = (graph, start) => {
  let queue = [start];
  let visited = new Set();
  visited.add(start);

  while (queue.length) {
    let node = queue.shift();

    for (let neighbor of graph[node]) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }

  return visited;
};

console.log(bfs(graph, 1));
