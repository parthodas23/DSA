var canJump = function (nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(0, i + nums[i]);
  }

  return true;
};

console.log(canJump([3, 2, 1, 0, 4]));