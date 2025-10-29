const quickSlection = (nums, k) => {
  let targetIndex = nums.length - k; // 6-2=4
  const partision = (left, right) => {
    let pivot = nums[right]; // a random pivot
    let i = left; // i is for divider where to swap
    for (let j = i; j < right; j++) {
      // j is for itration
      if (nums[j] <= pivot) { // i=3, 5,4
        [nums[i], nums[j]] = [nums[j], nums[i]]; // swapping with itself for smaller number 6,5
        i++;
      }
    }

    [nums[i], nums[right]] = [nums[right], nums[i]];// 5,6
    
    return i; // this is pivot  i=4
  };

  const quickSelect = (left, right) => {
    let pivotIndex = partision(left, right); // this pertision func
    if (pivotIndex === targetIndex) { 
      return nums[pivotIndex];  // 5
    } else if (pivotIndex < targetIndex) {
      return quickSelect(pivotIndex + 1, right);
    } else {
      return quickSelect(left, pivotIndex - 1);
    }
  };
  return quickSelect(0, nums.length - 1);
};
console.log(quickSlection([3, 2, 1, 5, 6, 4], 2));
