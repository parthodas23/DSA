var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[right] < prices[left]) {
      left = right;
    } else {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    }
    right++;
  }

  return maxProfit;
};
