var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  let n = n1 + n2;
  let low = 0,
    high = n1;
  let halfLen = Math.floor((n + 1) / 2);
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = halfLen - mid1;

    let L1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
    let L2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];

    let R1 = mid1 === n1 ? Infinity : nums1[mid1];
    let R2 = mid2 === n2 ? Infinity : nums2[mid2];

    if (L1 <= R2 && L2 <= R1) {
      if (n % 2 == 1) {
        return Math.max(L1, L2);
      }

      return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
    } else if (L1 > R1) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
