const reverse=(head)=>{
    let prev=null
    let curr=head

    while(curr !==null){
        curr.next=prev
        prev=curr
        curr=curr.next
    }
    return prev
}