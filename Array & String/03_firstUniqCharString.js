var firstUniqChar = function (s) {
  let count = {}; // create count obj that store all char as a count form
  for (let i = 0; i < s.length; i++) {
    // for
    let char = s[i]; // select  all char
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  // collect obj
  console.log(count);

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      // check in count all char
      return i;
    }
  }
  return -1;
};

firstUniqChar("loveleetcode");
