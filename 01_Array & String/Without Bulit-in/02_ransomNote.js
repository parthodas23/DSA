var canConstruct = function (ransomNote, magazine) {
  let count1 = {};
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (count1[char]) {
      count1[char] += 1;
    } else {
      count1[char] = 1;
    }
  }
  console.log(count1);
  let count2 = {};
  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (count2[char]) {
      count2[char] += 1;
    } else {
      count2[char] = 1;
    }
  }
  console.log(count2);
  // collect key
  for (let char in count1) {
    if (!count2[char]) {
      return false;
    } else if (count1[char] > count2[char]) {
      // 4>2- return false but 2>2 -- > condition becomes false , it's skipped

      return false;
      // in here if you return true then it exit too early, cuse it's just check this loop only
    }
  }
  return true; //Only return true after loop finishes checking all chars
};

console.log(canConstruct("aa", "aab"));
