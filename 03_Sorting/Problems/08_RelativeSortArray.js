const relativeSort = (arr1, arr2) => {
  const count = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (!count[num]) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }
  for (let num of arr2) {
    if (count[num]) {
      for (let i = 0; i < count[num]; i++) {
        result.push(num);
      }
      delete count[num]; // remove the count that is in already in count
    }
  }
  let remaining = [];
  for (let num in count) {
    for (let i = 0; i < count[num]; i++) {
      remaining.push(Number(num));
    }
  }

  remaining.sort((a, b) => a - b);

  return [...result, ...remaining];
};

console.log(
  relativeSort([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
