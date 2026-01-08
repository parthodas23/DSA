function climbStairs(n) {
  if (n <= 1) return 1; // base cases
  return climbStairs(n - 1) + climbStairs(n - 2);
}

// var climbStairs = function (n, memo = {}) {
//   if (n === 1 || n === 2) return n;

//   if (memo[n]) return memo[n];
//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

//   return memo[n];
// };

// memoization

// We store results in a cache (like an object in JS):
// First time you calculate climbStairs(3), you save it in memory (memo[3] = 3)
// Next time you need climbStairs(3), instead of recalculating, you just return the stored value.

// const climbStairs = (n) => {
//   if (n <= 1) return 1;
//   let prev1 = 1;
//   let prev2 = 1;

//   for (let i = 2; i <= n; i++) {
//     let curr = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = curr;
//   }

//   return prev1;
// };

console.log(climbStairs(5));
