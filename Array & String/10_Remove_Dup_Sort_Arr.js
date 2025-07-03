var removeDuplicates = function (nums) {
  let nonDup = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i + 1];
    }
  }
  console.log(nums);
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
