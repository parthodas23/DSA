const provinces = (isConnected) => {
  let provinces = 0;
  let n = isConnected.length;
  let visited = new Array(n).fill(false);

  const dfs = (city) => {
    visited[city] = true;

    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        dfs(neighbor);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      dfs(i);
    }
  }

  return provinces;
};

console.log(
  provinces([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
