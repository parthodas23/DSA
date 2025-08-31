const maxNum=(arr,left=0,right=arr.length-1)=>{
    if(arr[left]===arr[right]){
        return arr[left]
    }

    let mid=Math.floor((left+right)/2)

    let leftMax=maxNum(arr,left,mid)
    let rightMax=maxNum(arr,mid+1,right)

    
    return Math.max(leftMax,rightMax)
}

console.log(maxNum([9,7,12,5,4]))