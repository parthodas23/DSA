// let obj = {};
// obj['50'] = 'a'; // []--> use for keys
// obj['2'] = 'b';
// obj['100'] = 'c';

// console.log(obj);
// // { '2': 'b', '50': 'a', '100': 'c' } -->  Why ascending Order?
// // Keys that are integers (numeric strings) come first, in ascending order

// function freqCount(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let a = arr2[i] == arr1[i] ** 2;
//     if (a) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }

// freqCount([1, 2, 3], [1, 4, 9]);

function same(arr1, arr2) {
  // check edge case
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Count both arr number using obj
  let Count1 = {};
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (!Count1[num]) {
      Count1[num] = 1;
    } else {
      Count1[num] += 1;
    }
  }
  // console.log(Count1);

  let Count2 = {};
  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if (!Count2[num]) {
      Count2[num] = 1;
    } else {
      Count2[num] += 1;
    }
  }
  // console.log(Count2);

  for (let num in Count1) {
    let squired = num * num;
    if (Count1[num] !== Count2[squired]) {
      return false;
    }
  }
  return true;
}

console.log(same([3, 2, 1, 2], [4, 9, 1, 4]));
