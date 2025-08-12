function maxAvgSubArray(nums, k) {
  let firstSum = 0;
  for (let i = 0; i < k; i++) {
    firstSum += nums[i];
  }

  let max = firstSum;
  for (let i = 0; i < nums.length - k; i++) {
    firstSum = firstSum - nums[i] + nums[i + k];
    max = Math.max(max, firstSum);
  }

  return parseFloat(max / k);
}

console.log(maxAvgSubArray([1, 12, -5, -6, 50, 3], 4));
