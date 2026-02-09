const removeDuplicates = (nums) => {
  // edge cases
  if (nums.length <= 2) return nums.length;

  let k = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] != nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
