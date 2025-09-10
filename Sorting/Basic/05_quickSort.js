const quick = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // smaller goes to the left
    } else {
      right.push(arr[i]); // bigger goes to the right
    }
  }
  


  // console.log([...[0, 1], 2, ...[3, 7, 8, 10]]); // [0,1,2,3,7,8,10]

  return [...quick(left), pivot, ...quick(right)];
};
console.log(quick([8, 3, 1, 7, 0, 10, 2]));
