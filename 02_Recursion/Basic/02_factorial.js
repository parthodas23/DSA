const factorial = (n) => {
  if (n === 0) return 1; // 0! = 1

  // recursive call : break into smaller
  const smaller = factorial(n - 1);

  // combine smaller answer into bigger
  return n * smaller;
};

console.log(factorial(5));
