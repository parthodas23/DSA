const sumArray = (arr, i = 0) => {
  if (i === arr.length) return 0;

  let sumRest = sumArray(arr, i + 1);

  return arr[i] + sumRest;
};

console.log(sumArray([1, 2, 3, 4])); // 10

// arr[0] + sumArray([1,2,3,4], 1)
// = 1 + (arr[1] + sumArray([1,2,3,4], 2))
// = 1 + (2 + (arr[2] + sumArray([1,2,3,4], 3)))
// = 1 + (2 + (3 + (arr[3] + sumArray([1,2,3,4], 4))))
// = 1 + (2 + (3 + (4 + sumArray([1,2,3,4], 4))))
