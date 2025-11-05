class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

const root=new Node(1)
const A=new Node(2)
const B=new Node(3)
const C=new Node(9)

root.left=A
root.right=B
root.right.left=C
console.log(root.right.left.val)