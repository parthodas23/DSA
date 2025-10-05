// const arr = [0, 1, 0, 3, 12];
// arr[1] = 0;
// console.log(arr);

var moveZeroes = function (nums) {
  let indexShift = 0;
  // this loop for order the first non-zero element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[indexShift] = nums[i]; // when all non-zero element finish then it's end
      indexShift++;
    }
  }

  while (indexShift < nums.length) {
    nums[indexShift] = 0; // last all index add zero
    indexShift++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
