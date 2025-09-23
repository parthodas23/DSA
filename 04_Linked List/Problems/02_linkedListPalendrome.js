var isPalindrome = function(head) {
    let fast=head
    let slow=head
    while(fast && fast.next){
        fast=fast.next.next // this reach at the end, then null
        slow=slow.next // but this reach only half
    }

    let prev=null, curr=slow
    while(curr){  // reverse the second half
        let temp=curr.next
        curr.next=prev
        prev=curr
        curr=temp
    }

    let left=head, right=prev

    while(right){
        if(left.val!==right.val){
            return false
        }
        left=left.next
        right=right.next
    }

    return true
};