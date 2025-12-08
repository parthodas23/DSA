var pacificAtlantic = function (heights) {
  let rows = heights.length;
  let cols = heights[0].length;

  let pac = Array.from({ length: rows }, () => Array(cols).fill(false));
  let alt = Array.from({ length: rows }, () => Array(cols).fill(false));

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c, visited) => {
    if (visited[r][c] === true) return;
    visited[r][c] = true;

    for (let [dr, dc] of directions) {
      let nr = dr + r;
      let nc = dc + c;

      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

      if (heights[r][c] <= heights[nr][nc]) {
        dfs(nr, nc, visited);
      }
    }
  };
  // top
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pac);
  }

  // left
  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pac);
  }

  // bottom
  for (let col = 0; col < cols; col++) {
    dfs(rows - 1, col, alt);
  }

  // right
  for (let row = 0; row < rows; row++) {
    dfs(row, cols - 1, alt);
  }

  let results = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pac[r][c] && alt[r][c]) {
        results.push([r, c]);
      }
    }
  }

  return results;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
