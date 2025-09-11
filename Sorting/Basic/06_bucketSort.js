const bucket = (arr, bucketSize = 10) => {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);

  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount).fill(null).map(() => []); // map doesn't work for empty array it's work for when the arr have something. in our case null also the same

  for (let num of arr) {
    let bucketIndex = Math.floor((num - minValue) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  arr.length = 0;
  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
    arr.push(...bucket);
  }
  return arr;
};
console.log(bucket([29, 25, 3, 49, 9, 37, 21, 43]));
