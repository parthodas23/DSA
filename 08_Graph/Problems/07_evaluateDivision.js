var calcEquation = function (equations, values, queries) {
  let graph = {};
  for (let i = 0; i < equations.length; i++) {
    let [a, b] = equations[i];
    let val = values[i];

    if (!graph[a]) graph[a] = [];
    if (!graph[b]) graph[b] = [];

    graph[a].push([b, val]);
    graph[b].push([a, 1 / val]);
  }

  const dfs = (curr, target, visited, product) => {
    if (!graph[curr]) return -1;
    if (curr === target) return product;

    visited.add(curr);
    for (let [next, val] of graph[curr]) {
      if (!visited.has(next)) {
        const result = dfs(next, target, visited, product * val);
        if (result !== -1) return result; // if result exist then no need furthur explore
      }
    }

    return -1; // if never find the target
  };

  let results = [];
  for (let [a, b] of queries) {
    if (!graph[a] || !graph[b]) {
      results.push(-1);
    } else if (a === b) {
      results.push(1);
    } else {
      const visited = new Set();
      results.push(dfs(a, b, visited, 1));
    }
  }
};

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
);
