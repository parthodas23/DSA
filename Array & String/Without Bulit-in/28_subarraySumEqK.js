const subarraySum = (nums, k) => {
  let prefixSum = 0;
  let count = 0;
  let map = { 0: 1 };
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    let needed = prefixSum - k;

    if (needed in map) {
      count += map[needed];
    }

    if (prefixSum in map) {
      map[prefixSum] += 1;
    } else {
      map[prefixSum] = 1;
    }
  }

  return count;
};
console.log(subarraySum([1, 1, 1], 2));
