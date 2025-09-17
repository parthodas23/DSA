const sortArray = (nums) => {
  const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
  };

  const merge = (left, right) => {
    let i = 0,
      j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    console.log(result);
    return result.concat(left.slice(i)).concat(right.slice(j)); // some value is still avilable
  };

  return mergeSort(nums);
};

console.log(sortArray([5, 1, 1, 2, 0, 0]));
