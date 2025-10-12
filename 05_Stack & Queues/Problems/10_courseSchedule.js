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
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return count === numCourses;
};

// const canFinish = (courseNumber, arr) => {
//   const graph = {};
//   const inDegree = new Array(courseNumber).fill(0);
//   let count = 0;
//   for (let [a, b] of arr) {
//     if (!graph[b]) graph[b] = [];
//     graph[b].push(a);
//     inDegree[a]++;
//   }

//   let queue = [];
//   for (let i = 0; i < courseNumber; i++) {
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }

//   while (queue.length) {
//     let current = queue.shift();
//     count++;
//     for (let neighbor of graph[current]) {
//       inDegree[neighbor]--;
//       if (inDegree[neighbor] === 0) {
//         queue.push(neighbor);
//       }
//     }
//   }
//   return courseNumber === count;
// };
// console.log(
//   canFinish(2, [
//     [1, 0],
//     [0, 1],
//   ])
// );
