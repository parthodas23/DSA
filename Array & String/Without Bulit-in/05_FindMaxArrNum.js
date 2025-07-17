function findMaxNumArr(arr) {
  // assume the 1st element the max num in the beginning
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // all num
    let num = arr[i];
    if (num > max) {
      max = num; // if we return early this will not check the full lopp
    }
  }
  return max; // in here check the all loops then return
}

console.log(findMaxNumArr([1, 4, 3, 9, 6, 5]));
