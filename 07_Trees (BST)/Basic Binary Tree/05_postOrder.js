class TreeNode{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

const node=new TreeNode(1)
const L1=new TreeNode(2)
const R1=new TreeNode(3)
const L2=new TreeNode(4)
const R2=new TreeNode(5)
const L3=new TreeNode(6)
const R3=new TreeNode(7)

node.left=L1
node.right=R1
node.left.left=L2
node.left.right=R2
node.right.left=L3
node.right.right=R3

const postOrder=(node)=>{
    if(!node)return

    postOrder(node.left)
    postOrder(node.right)
    console.log(node.val)
}
postOrder(node)