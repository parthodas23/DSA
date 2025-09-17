const minAbsulateDiff = (arr) => {
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }

  return result;
};

console.log(minAbsulateDiff([4, 2, 3, 1]));
