const canRotten = (grid) => {
  let rows = grid.length;
  if (rows === 0) return -1;
  let cols = grid[0].length;
  let queue = [];
  let freshCount = 0;
  let minutes = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  if (freshCount === 0) {
    return 0;
  }

  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let size = queue.length;
    let anyRottenOrange = false;
    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift();
      for (let [dr, dc] of directions) {
        let nr = dr + row;
        let nc = dc + col;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < rows &&
          nc < cols &&
          grid[nr][nc] === 1
        ) {
          grid[nr][nc] = 2;
          freshCount--;
          queue.push([nr, nc]);
          anyRottenOrange = true;
        }
      }
    }
    if (anyRottenOrange) minutes++;
  }

  return freshCount ? -1 : minutes;
};

console.log(
  canRotten([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
