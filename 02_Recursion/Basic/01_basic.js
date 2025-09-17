// Recursion --> a function calls itself
const countDown = (n) => {
  // Base Case : Stopping Point
  if (n <= 0) return;

  console.log(n);

  // Recursive Call : break into smaller problem with modified condition
  countDown(n - 1);
};

countDown(5);
