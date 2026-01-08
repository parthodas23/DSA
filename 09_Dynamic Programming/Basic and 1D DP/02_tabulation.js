const climbStairs = (n) => {
  let dp = new Array(n + 1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.table(dp);

  return dp[n];
};

console.log(climbStairs(5));
