var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let count = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // select eatch carecter and use it for count
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1; // first time add the char count
    }
    // console.log(count);
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!count[char]) {
      // if char isn't in the count like 'cat' 'rat'
      return false;
    } else {
      count[char] -= 1;
    }
    // console.log(count);
  }

  return true;
};

isAnagram("anagram", "nargama");
