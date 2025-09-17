let countFrequency = (arr, exp) => {
  let output = new Array(arr.lrngth).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // add prefix sum in count for finding the index
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length; i >= 0; i--) {
    let digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--; // it's for not add all the same value in one index
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
};

const redixSort = (arr) => {
  let maxNum = Math.max(...arr);
  for (let exp = 1; Math.floor(maxNum / exp); exp *= 10) {
    countFrequency(arr, exp);
  }
  return arr;
};

console.log(redixSort([170, 45, 75, 90, 802, 24, 2, 66]));
