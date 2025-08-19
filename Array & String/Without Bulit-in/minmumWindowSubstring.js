const minWindowSubStr = (s, t) => {
  if (s.length < t.length) return "";

  let need = {};
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!need[char]) {
      need[char] = 1;
    } else {
      need[char] += 1;
    }
  }

  let needCount = Object.keys(need).length;
  let result = "";
  let resultLen = Infinity;
  let have = {};
  let haveCount = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    if (!have[char]) {
      have[char] = 1;
    } else {
      have[char] += 1;
    }

    if (need[char] && need[char] === have[char]) {
      haveCount++;
    }

    while (haveCount === needCount) {
      let windowLen = right - left + 1;
      if (windowLen < resultLen) {
        resultLen = windowLen;
        result = s.substring(left, right + 1);
      }

      have[s[left]]--;  // 1st it's become less and now need[s[left]] would ne greater
      if (need[s[left]] && have[s[left]] < need[s[left]]) {
        haveCount--;
      }
      left++;
    }
  }

  return result;
};

console.log(minWindowSubStr("ADOBECODEBANC", "ABC"));
