var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  let result = [intervals[0]];
  let i = 1;
  while (i < intervals.length) {
    let interval = intervals[i];
    let last = result[result.length - 1];

    if (last[1] >= interval[0]) {
      // this is how we merge things instead of reassigning
      last[0] = Math.min(last[0], interval[0]);
      last[1] = Math.max(last[1], interval[1]);
    } else {
      // this skip overlap but after next this would be merge by next one
      result.push(interval);
    }
    i++;
  }

  return result;
};

console.log(
  merge([
    [4, 7],
    [1, 4],
  ])
);
