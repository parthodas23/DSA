const search2Dmatrix = (matrix, target) => {
  let rows = matrix.length;
  let cols = matrix[0].length - 1;

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / cols)][mid % cols];

    if (midValue === target) {
      return true;
    } else if (midValue > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
