const canFinish = (numCourses, arr) => {
  let graph = {};
  let inDegree = new Array(numCourses).fill(0);
  let queue = [];
  for (let [a, b] of arr) {
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
    inDegree[a]++;
  }


  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length) {
    let current = queue.shift();
    count++;
    for (let neighbor of graph[current]) {
      console.log(neighbor);
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return count === numCourses;
};
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
