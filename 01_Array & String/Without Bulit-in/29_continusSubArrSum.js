var checkSubarraySum = function (nums, k) {
  let map = { 0: -1 }; // for this type of exmp -> [5,5], k=5
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum % k;

    if (rem in map) {
      if (i - map[rem] >= 2) {
        return true;
      }
    } else {
      map[rem] = i;
    }
  }

  return false;
};
