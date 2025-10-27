var maxSubArray = function (nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;
  for (let i = 1; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum < nums[i]) {
      currentSum = nums[i];
    }
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


