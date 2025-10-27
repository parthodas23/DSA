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
      mid++; // in here mid is pointer so mid check for every number
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--; // why not mid as well because high already swap that's why the 1st value chnge in swap time
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
