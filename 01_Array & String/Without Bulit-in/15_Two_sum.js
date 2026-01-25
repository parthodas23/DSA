var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i; // key=num, value=index
  }

  console.log(map);
  
  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map[needed] !== undefined && map[needed] !== i) {
      console.log(map[needed])
      // check they will not be same index
      return [i, map[needed]];
    }
  }
  return [];
};
console.log(twoSum([4, 3, 2, 3], 6));
