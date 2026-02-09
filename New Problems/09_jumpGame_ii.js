const jumps = (nums) => {
  let jumps = 0;
  let farthest = 0;
  let current_end = 0;

  // why n-1 cause we're given to return the jumps (it's ensure the jumps will reach the end now we need the min jumps)

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === current_end) {
      jumps++;
      current_end = farthest;
    }
  }

  return jumps;
};

console.log(jumps([1, 1, 1, 1, 1]));
