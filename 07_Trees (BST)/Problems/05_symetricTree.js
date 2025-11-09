const symetricTree=(root)=>{
    if(!root)return true

    let queue=[]
    queue.push(root.left)
    queue.push(root.right)

    while(queue.length>0){
        let t1=queue.shift()
        let t2=queue.shift()

        if(!t1 && !t2)continue  // this check if both null then return true
        if(!t1 || !t2)return false // id one is null and another one isn't then false

        if(t1.val!==t2.val)return false  

        queue.push(t1.left)
        queue.push(t2.right)

        queue.push(t2.left)
        queue.push(t1.right)
    }

    return true
}