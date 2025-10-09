



const arr = [
  [1, 0],
  [2, 0],
];

const graph = {};
for (let [a, b] of arr) {
  if (!graph[b]) graph[b] = [];
  graph[b].push(a);
}
console.log(graph);
