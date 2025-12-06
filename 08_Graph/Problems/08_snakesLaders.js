var snakesAndLadders = function (board) {
  let n = board.length;
  let cells = Array(n * n + 1).fill(-1);
  let idx = 1;
  let leftToRight = true;
  for (let r = n - 1; r >= 0; r--) {
    if (leftToRight) {
      for (let c = 0; c < n; c++) {
        cells[idx++] = board[r][c];
      }
    } else {
      for (let c = n - 1; c >= 0; c--) {
        cells[idx++] = board[r][c];
      }
    }
    leftToRight = !leftToRight;
  }

  let queue = [[1, 0]]; // pos and moves
  let visited = new Set([1]);

  while (queue.length) {
    let [pos, moves] = queue.shift();

    if (pos === n * n) return moves;

    for (let roll = 1; roll <= 6; roll++) {
      let next = pos + roll;

      if (cells[next] > n * n) continue;
      if (cells[next] !== -1) next = cells[next];

      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, moves + 1]);
      }
    }
  }

  return -1;
};

console.log(
  snakesAndLadders([
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ])
);
