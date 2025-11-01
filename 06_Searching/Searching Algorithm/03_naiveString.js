const naiveString = (str, s) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] !== str[i + j]) {
        // this is for checking j length of i at a time
        break;
      }

      if (j === s.length - 1) count++;
    }
  }

  return count;
};

const naiveStringSearchAlgo = (str, s) => {
  let index = str.indexOf(s);
  console.log(index);

  let count = 0;

  while (index !== -1) {
    count++;
    index = str.indexOf(s, index + 1);
  }

  return count;
};

console.log(naiveString("ahomgohomg", "omg"));
console.log(naiveStringSearchAlgo("ahomgohomg", "omg"));
