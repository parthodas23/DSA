var exist = function (board, word) {
  let rows = board.length;
  let cols = board[0].length;

  const dfs = (r, c, index) => {
    if (index === word.length) {
      return true; // found word. stop furtur searching
    }

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[index]
    ) {
      return false; // start search again
    }

    let temp = board[r][c]; // char collect
    board[r][c] = "#";

    let found =
      dfs(r + 1, c, index + 1) || // up
      dfs(r - 1, c, index + 1) || // down
      dfs(r, c + 1, index + 1) || // right
      dfs(r, c - 1, index + 1); // left

    board[r][c] = temp; // resore the char

    return found;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};

// var exist = function (board, word) {
//   let rows = board.length;
//   let cols = board[0].length;
//   console.log(rows);
//   console.log(cols);

//   function dfs(r, c, index) {
//     console.log(
//       `DFS called at (${r},${c}) for word[${index}] = "${word[index]}"`
//     );

//     if (index === word.length) {
//       console.log(`Word found!`);
//       return true;
//     }

//     if (
//       r < 0 ||
//       c < 0 ||
//       r >= rows ||
//       c >= cols ||
//       board[r][c] !== word[index]
//     ) {
//       console.log(`Out of bounds or not matching at (${r},${c})`);
//       return false;
//     }

//     let temp = board[r][c];
//     board[r][c] = "#"; // mark visited
//     console.log(`Visiting (${r},${c}), board now:`);
//     console.table(board);

//     let found =
//       dfs(r + 1, c, index + 1) ||
//       dfs(r - 1, c, index + 1) ||
//       dfs(r, c + 1, index + 1) ||
//       dfs(r, c - 1, index + 1);

//     board[r][c] = temp; // backtrack
//     console.log(`Backtracking from (${r},${c}), board restored:`);
//     console.table(board);

//     return found;
//   }

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (dfs(r, c, 0)) return true;
//     }
//   }

//   return false;
// };

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board, "SEE"));
