const subsets=(nums)=>{
    let result=[]

    const backtrack=(start,path)=>{
        result.push([...path])

        for(let i=start;i<nums.length;i++){
            path.push(nums[i])
            backtrack(i+1,path)  // explore
            path.pop()  // backtrack
        }
    }

    backtrack(0,[])
    return result
}

console.log(subsets([1,2,3]))