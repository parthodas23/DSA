var searchRange = function (nums, target) {
  const firstPos = (nums, target) => {
    let left = 0,
      right = nums.length - 1,
      first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        first = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return first;
  };

  const lastPos = (nums, target) => {
    let left = 0,
      right = nums.length - 1,
      last = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        last = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return last;
  };

  return [firstPos(nums, target), lastPos(nums, target)];
};
