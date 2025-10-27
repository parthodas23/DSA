var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // here nums.length-2 because we gonna use two pointer, so pick i and then use left and right
    if (i > 0 && nums[i] === nums[i - 1]) {  // this avoids adding dup triplets
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];
      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // this run only when found dup in left side
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++; // this will run no matter what, if while loop run then this also run 1 more time for skip fully the dup num
        right--;
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
