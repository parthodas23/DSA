const mostWater = (height) => {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);

    max_area = Math.max(max_area, w * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max_area;
};

console.log(mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
