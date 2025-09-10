const quickSlection = (nums, k) => {
  let targetIndex = nums.length - k;
  const partision = (left, right) => {
    let pivot = nums[right];
    let i = left; // i is for divider where to swap
    for (let j = i; j < right; j++) {
      // j is for itration
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swapping with itself for smaller code
        i++;
      }
    }
    [nums[i], nums[right]] = [nums[right], nums[i]];
    return i; // this is pivot index
  };

  const quickSelect = (left, right) => {
    let pivotIndex = partision(left, right);
    if (pivotIndex === targetIndex) {
      return nums[pivotIndex];
    } else if (pivotIndex < targetIndex) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  };
  return quickSelect(0, nums.length - 1);
};
console.log(quickSlection([3, 2, 1, 5, 6, 4], 2));
