const lcp = (strs) => {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let c = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || c !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];

  //   strs.sort();

  //   let i = 0;
  //   while (i < strs[0].length && strs[0][i] === strs[strs.length - 1][i]) {
  //     i++;
  //   }

  //   return strs[0].slice(0, i);
};

console.log(lcp(["flower", "flow", "flight"]));
