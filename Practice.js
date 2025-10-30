const courseSchedule = (numCourses, prerequisites) => {
  let queue = [];
  let graph = {};
  let inDegree = new Array(numCourses).fill(0);

  for (let [a, b] of prerequisites) {
    if (!graph[b]) graph[b] = [];
    graph[b].push(a);
    inDegree[a]++; // why do we need to increase a ?
  }

  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i); // in here what actually queue does?
    }
  }
  let count = 0;
  while (queue.length) {
    let current = queue.shift();
    count++;

    for (let neighbor of graph[current]) {
      // in what is neighbor actually?
      inDegree[neighbor]--; // why we are decresing the inDegree[neighbor] value before?
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor); // in why are we adding neighbor in queue?
      }
    }
  }

  return count === numCourses;
};
