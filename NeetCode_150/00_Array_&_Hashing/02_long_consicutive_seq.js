const longestConsicutive = (nums) => {
  if (!nums.length) return 0;
  let numSet = new Set(nums);
  let longest = 0;
  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currNum = num;
      let currSteak = 1;

      while (numSet.has(currNum + 1)) {
        currNum++;
        currSteak++;
      }

      longest = Math.max(longest, currSteak);
    }
  }

  return longest;
};

console.log(longestConsicutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
