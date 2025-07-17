var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      // here i always increase but k only increase when we find a num=val it's maintain the arr index balance
      k++;
    }
  }
  console.log(nums);
  return [k, nums.slice(0, k)];
};

console.log(removeElement([3, 2, 2, 3], 3));
