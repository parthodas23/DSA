const reverse=(head)=>{
    let prev=null
    let curr=prev

    while(curr !==null){
        let newNode=curr.next
        curr.next=prev
        prev=curr
        curr=newNode
    }
    return prev
}