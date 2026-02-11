const candy = (ratings) => {
  // pattern prefix sum
  let n = ratings.length;
  let count = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      count[i] = count[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      count[i] = Math.max(count[i], count[i + 1] + 1);
    }
  }
  let candies = 0;
  for (let c of count) {
    candies += c;
  }
  return candies;
};

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
