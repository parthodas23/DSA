const isSubSequance = (s, t) => {
  if (!s.length) return true;
  if (s.length > t.length) return false;

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  if (i === s.length) return true;

  return false;
};

console.log(isSubSequance("abc", "ahbgdc"));
