var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i; // key=num, value=index
  }

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map[needed] !== undefined && map[needed] !== i) {
      // check they will not be same index
      return [i, map[needed]];
    }
  }
  return [];
};
console.log(twoSum([3, 2, 3], 6));
