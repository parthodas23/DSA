//  make the best possible choice at the current moment without worrying about the future

const minCoins = (coins, amount) => {
  coins.sort((a, b) => b - a);

  let count = 0;

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }

  return amount === 0 ? count : -1;
};

console.log(minCoins([1, 2, 5], 11));
