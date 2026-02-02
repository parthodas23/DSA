var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n; // handle k>n

  const reverse = (arr, left, right) => {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  reverse(nums, 0, n - 1); // reverse all
  reverse(nums, 0, k - 1); // reverse 1st k size
  reverse(nums, k, n - 1); // reverse rest
};
