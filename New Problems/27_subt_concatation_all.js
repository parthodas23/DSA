const subConcatation = (words, s) => {
  if (!s || !words || !words.length) return [];

  let L = words[0].length;
  let N = words.length;
  //   let totalWords = L * N;

  let wordCount = new Map();
  for (let word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  const result = [];

  for (let i = 0; i < L; i++) {
    // L --> same
    let left = i;
    let right = i;
    let currMap = new Map();
    let count = 0;

    while (right + L <= s.length) {
      // <= cause it's substring method
      let w = s.substring(right, right + L);
      right += L;
      if (wordCount.has(w)) {
        currMap.set(w, (currMap.get(w) || 0) + 1);
        count++;

        while (currMap.get(w) > wordCount.get(w)) {
          let leftWord = s.substring(left, left + L);

          currMap.set(leftWord, currMap.get(leftWord) - 1);
          count--;
          left += L;
        }
        if (count === N) result.push(left);
      } else {
        currMap.clear();
        count = 0;
        left = right;
      }
    }
  }

  return result;
};

console.log(subConcatation(["bar", "foo", "the"], "barfoofoobarthefoobarman"));
