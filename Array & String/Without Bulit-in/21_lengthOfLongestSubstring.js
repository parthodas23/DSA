function lengthOfLongestSubstring(s) {
  let map = {};
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    while (map[char]) {
      map[s[left]] = false; // remove all using left pointer
      left++;
    }
    map[char] = true; // add 1st all unique char

    let windowLen = right - left + 1; // now calculate len using left, right
    maxLen = Math.max(maxLen, windowLen);
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("pwwkew"));
