var rottingOranges = function (grid) {
  let rows = grid.length;
  if (rows === 0) return -1;
  let cols = grid[0].length;
  const queue = [];
  let freshCount = 0;
  let minutes = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount += 1;
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
    let size = queue.length; // if 1 rotted orange then inside queue would be 1 arr but if size 2 then the queue size would be 2 as well
    let anyRottedOrrange = false;

    for (let i = 0; i < size; i++) {
      let [r, c] = queue.shift();

      for (let [dr, dc] of directions) {
        // so based on the size each rotted orange (r,c) creates another rotted orange besides it's directions
        let newRow = r + dr;
        let newCol = c + dc;

        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2;
          freshCount -= 1;
          queue.push([newRow, newCol]);
          anyRottedOrrange = true;
        }
      }
    }
    if (anyRottedOrrange) minutes++;
  }

  return freshCount === 0 ? minutes : -1;
};

console.log(
  rottingOranges([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
// from any cell (r, c):
// Going down means increasing the row → (r + 1, c)
// Going up means decreasing the row → (r - 1, c)
// Going right means increasing the column → (r, c + 1)
// Going left means decreasing the column → (r, c - 1)
