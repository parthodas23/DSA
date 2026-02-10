const product = (nums) => {
  let n = nums.length;
  let answer = new Array(n).fill(1);

  let left_product = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left_product;
    left_product *= nums[i];
  }

  let right_product = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right_product;
    right_product *= nums[i];
  }

  return answer;
};

console.log(product([1, 2, 3, 4]));
