const provinces = (isConnected) => {
  let provinces = 0;
  let n = isConnected.length;
  let visited = Array(n).fill(false);

  const dfs = (city) => {
    visited[city] = true;
    for (let nei = 0; nei < n; nei++) {
      if (isConnected[city][nei] === 1 && !visited[nei]) {
        dfs(nei);
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
