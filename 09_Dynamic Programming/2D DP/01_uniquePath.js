const uniquePath = (m, n) => {
  let dp = Array.from({ length: m }, () => new Array(n).fill(0));

  // down
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  // top
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.table(uniquePath(3, 3));
