const prefixSum = (arr) => {
  let prefix = [];
  prefix[0] = arr[0]; // store 0 index for easy to sum

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = arr[i] + prefix[i - 1]; // 1st select num and add last prefixSum
  }
  return prefix;
};

console.log(prefixSum([2, 4, 6, 8]));
