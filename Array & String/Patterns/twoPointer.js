function pointer(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i] + arr[j] === 0) {
        console.log(arr[i], arr[j]);
        return;
      }
    }
  }
}

pointer([4, 3, 2, 1, -1, -2, -3, -5]);
