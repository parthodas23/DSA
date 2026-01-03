const isReginon = (board) => {
  const rows = board.length;
  const cols = rows ? board[0].length : 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") return;
    board[r][c] = "S";

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    dfs(r, 0);
    dfs(r, cols - 1);
  }

  for (let c = 0; c < cols; c++) {
    dfs(0, c);
    dfs(cols - 1, c);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      if (board[r][c] === "S") board[r][c] = "O";
    }
  }

  return board;
};

console.log(
  isReginon([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
