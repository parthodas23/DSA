const firstOcurr = (haystack, needle) => {
  const n = haystack.length;//9
  const m = needle.length;//3

  for (let i = 0; i <= n - m; i++) {
    let subString = haystack.substring(i, i + m);

    if (subString === needle) {
      return i;
    }
  }

  return i;
};

console.log(firstOcurr("sadbutsad", "sad"));
