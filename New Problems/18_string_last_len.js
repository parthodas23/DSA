const lastLength = (s) => {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let char = s[i];
    if (char !== " ") {
      count++;
    }

    if (count && char === " ") {
      return count;
    }
  }

  return count;
};

console.log(lastLength("   fly me   to   the moon  "));
