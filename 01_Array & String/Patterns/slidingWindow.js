// function maxSum(arr, k) {
//   let max = -Infinity;
//   for (let i = 0; i <= arr.length - k; i++) { // length - k --> at least avilable k length of nums
//     let tempSum = 0;
//     for (let j = i; j < i + k; j++) { // add one by one nums with k length of nums
//       tempSum += arr[j];
//     }
//     max = Math.max(max, tempSum);
//   }
//   return max;
// }

// console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));

function maxSum(arr, k) {
  // in here we gonna use sliding window
  // one for add first k length of nums
  let firstSum = 0;
  for (let i = 0; i < k; i++) {
    firstSum += arr[i];
  }
  // one for removing element and adding element
  let max = firstSum;

  for (let i = 0; i < arr.length - k; i++) {
    firstSum = firstSum - arr[i] + arr[i + k];  // here firstSum is changed
    max = Math.max(max, firstSum);
  }

  return max;
  // 17 - 1 + 23 = 39
}

console.log(maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
