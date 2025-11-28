const lenearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
};

console.log(lenearSearch([12, 3, 4, 5], 4));
console.log(lenearSearch([12, 3, 4, 5], 7));
