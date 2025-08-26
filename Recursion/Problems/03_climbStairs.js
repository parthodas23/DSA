var climbStairs = function (n, memo = {}) {
  if (n === 1 || n === 2) return n;

  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  return memo[n];
};
// memoization

// We store results in a cache (like an object in JS):
// First time you calculate climbStairs(3), you save it in memory (memo[3] = 3)
// Next time you need climbStairs(3), instead of recalculating, you just return the stored value.
