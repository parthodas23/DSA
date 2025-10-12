var maxSlidingWindow = function (nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    // this ensures nums[deque[deque.length-1]]<nums[i] --> the deque would be decreasing order. means deque[0] would be max
    deque.push(i);

    if (deque[0] <= i - k) {
      // in here i+k is what new window would be so if the first deque value is <= i-k then it's a previous window index
      deque.shift();
    }

    if (i >= k - 1) {
      // means if we're already in the last index (i>=k-1 --> i >=3-1=2) of window then push the max in result
      result.push(nums[deque[0]]);
    }
  }

  return result;
};
