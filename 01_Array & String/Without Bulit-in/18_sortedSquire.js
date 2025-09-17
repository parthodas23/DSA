var sortedSquares = function (nums) {
  let result = [];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];
    // in result arr all value would be store in decresing order form
    if (leftSq > rightSq) {
      result.push(leftSq);
      left++;
    } else {
      result.push(rightSq);
      right--;
    }
  }
  // we have to do it because result arr id decresing order
  return result.reverse();
};
