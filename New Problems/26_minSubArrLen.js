const minSubArrLen = (target, nums) => {
  let left = 0;
  let curr_sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    curr_sum += nums[right];

    while (curr_sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      curr_sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrLen(7, [2, 3, 1, 2, 4, 3]));
