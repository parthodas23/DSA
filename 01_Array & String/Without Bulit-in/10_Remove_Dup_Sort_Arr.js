var removeDuplicates = function (nums) {
  let i = 0; // this is a slow pointer like just adding unique nums index wise
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      // 1st change index then add
      i++; // this is add and also count how many unique num add like index wise,
      nums[i] = nums[j];
    }
  }
  console.log(nums.slice(0, i + 1));
  return nums; // in here i is for index so it's counts as a index that's totlat unique nums is i+1
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
