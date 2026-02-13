const romanToInteger = (s) => {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    let current_val = map[s[i]];

    if (i + 1 < s.length) {
      let next_val = map[s[i + 1]];
      if (next_val > current_val) {
        total -= current_val;
      } else {
        total += current_val;
      }
    } else {
      total += current_val;
    }
  }

  return total;
};

console.log(romanToInteger("MCMXCIV"));
