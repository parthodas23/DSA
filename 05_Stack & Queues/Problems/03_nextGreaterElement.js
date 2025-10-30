var nextGreaterElement = function (nums1, nums2) {
  // If the question said “find the largest greater number to the right”, then 4 would be correct.
  // But the word “next” means the immediate one — the first greater number on the right side.
  let nextGreater = new Map();
  let stack = [];
  for (let num of nums2) {
    while (stack.length && num > stack[stack.length - 1]) {
      let smaller = stack.pop();
      nextGreater.set(smaller, num);
    }
    stack.push(num);
  }
  console.log(nextGreater);

  return nums1.map((num) => nextGreater.get(num) ?? -1);
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
