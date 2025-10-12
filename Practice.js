const maxSum = (arr, k) => {
  let firstSum = 0;
  for (let i = 0; i < k; i++) {
    firstSum += arr[i];
  }

  let max = firstSum;
  for (let i = 0; i < arr.length - k; i++) {
    firstSum = firstSum - arr[i] + arr[i + k];
    max = Math.max(max, firstSum);
  }

  return max;
};
