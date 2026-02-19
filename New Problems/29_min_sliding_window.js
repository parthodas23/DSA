const minSlidingWindow = (s, t) => {
  if (!s || !t || s.length < t.length) return "";

  let dictT = {};
  for (let char of t) {
    dictT[char] = (dictT[char] || 0) + 1;
  }
  const required = Object.keys(dictT).length;

  let left = 0;
  let right = 0;
  let formed = 0;
  let ans = [Infinity, 0, 0];
  let window = {};

  while (right < s.length) {
    let char = s[right];
    window[char] = (window[char] || 0) + 1;

    if (dictT[char] && dictT[char] === window[char]) {
      formed++;
    }

    while (left <= right && formed === required) {
      if (ans[0] > right - left + 1) {
        ans = [right - left + 1, left, right];
      }

      let leftWord = s[left];
      window[leftWord]--;

      if (dictT[leftWord] && window[leftWord] < dictT[leftWord]) {
        formed--;
      }

      left++;
    }
    right++;
  }

  return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
};

console.log(minSlidingWindow("ADOBECODEBANC", "ABC"));
