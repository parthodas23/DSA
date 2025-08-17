function sellAndBuyBook(prices) {
  let maxProfit = 0;
  let buy = 0;
  for (let i = 1; i < prices.length; i++) {
    let sell = prices[i];
    let profit = sell - prices[buy];

    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      buy++;
    }
  }

  return maxProfit;
}

console.log(sellAndBuyBook([7, 1, 5, 3, 6, 4]));
