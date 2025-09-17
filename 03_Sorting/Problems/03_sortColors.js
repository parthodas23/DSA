const sortColors = (nums) => {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;

      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
