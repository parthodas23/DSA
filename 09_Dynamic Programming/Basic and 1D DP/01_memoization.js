const climbStairs = (n, memo = {}) => {
  // it's also called top-down approach
  if (n <= 2) return n;
  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n];
};

console.log(climbStairs(4));
