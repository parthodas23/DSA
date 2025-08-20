const pivotIndex = function(nums) {
    let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  let leftSum = 0;
  for(let i=0;i<nums.length;i++){
    let rightSum=total-leftSum-nums[i] // this i is updated 1st

    if(leftSum===rightSum){
        return i
    }
    leftSum+=nums[i] // this i is old compare to 1st i 
  }

  return -1
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
