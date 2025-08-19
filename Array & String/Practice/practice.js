const maxSum = (arr, k) => {
  // sliding window
  // 1st one for add 1st k length of nums
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let max = windowSum;
  // 2nd one remove 1st one add next one

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];

    max = Math.max(max, windowSum);
  }
  return max;
};

console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
