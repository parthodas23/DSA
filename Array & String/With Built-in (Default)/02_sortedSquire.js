var sortedSquares = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(-nums[i]){
            nums[i]=-nums[i]*-nums[i]
        }else{
            nums[i]=nums[i]*nums[i]
        }
    }

    return nums.sort((a,b)=>a-b)
};