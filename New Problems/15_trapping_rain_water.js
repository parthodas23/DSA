const waterTrapped = (height) => {
  let left = 0;
  let right = height.length - 1;
  let left_max = 0;
  let right_max = 0;
  let total_water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (left_max < height[left]) {
        left_max = height[left];
      } else {
        total_water += left_max - height[left];
      }
      left++;
    } else if (height[right] <= height[left]) {
      if (right_max < height[right]) {
        right_max = height[right];
      } else {
        total_water += right_max - height[right];
      }

      right--;
    }
  }
  return total_water;
};

console.log(waterTrapped([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
