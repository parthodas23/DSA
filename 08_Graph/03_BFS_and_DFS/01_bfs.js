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

    for (let neibhor of graph[node]) {
      visited.add(neibhor);
      queue.push(neibhor);
    }
  }

  return visited;
};

console.log(bfs(graph, 1));
