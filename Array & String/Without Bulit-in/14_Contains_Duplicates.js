var containsDuplicate = function(nums) {
    let count={} // use hash map for counting
    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        if(!count[num]){
            count[num]=1
        }else{
            count[num]+=1
        }

        if(count[num]>1){ // check if each num contains duplicate or not
            return true
        }
    }
    return false
};