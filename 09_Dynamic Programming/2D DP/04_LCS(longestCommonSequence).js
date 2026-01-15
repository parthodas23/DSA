const lcs = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;

  let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // you have to skip char but from which one? s1 or s2
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};

console.log(lcs("abcde", "ace"));
console.log(lcs("abc", "abc"));
