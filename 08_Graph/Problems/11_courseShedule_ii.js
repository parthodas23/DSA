const order = (numCourses, prerequisites) => {
  let graph = {};
  let inDegree = Array(numCourses).fill(0);
  console.log(inDegree);
  for (let [a, b] of prerequisites) {
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);

    inDegree[a]++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  let order = [];
  while (queue.length) {
    let curr = queue.shift();

    order.push(curr);

    if (graph[curr]) {
      for (let nei of graph[curr]) {
        inDegree[nei]--;
        if (inDegree[nei] === 0) {
          queue.push(nei);
        }
      }
    }
  }

  return order.length === numCourses ? order : [];
};

console.log(
  order(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
