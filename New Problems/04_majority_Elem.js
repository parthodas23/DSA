const majorityElem = (nums) => {
  let count = 0;
  let candidate = null;
  [].un
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += candidate === num ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElem([2, 2, 1, 1, 1, 2, 2]));
