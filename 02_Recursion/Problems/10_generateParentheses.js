const generateParentheses = (n) => {
  let result = [];
  const backtack = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtack(current + ")", open, close + 1);
    }
  };

  backtack("", 0, 0);
  return result;
};

console.log(generateParentheses(3));
