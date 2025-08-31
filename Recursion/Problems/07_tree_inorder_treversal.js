var inorderTraversal = function(root) {
    let result=[]
    const inorder=(node)=>{
        if(node===null) return
        inorder(node.left)
        result.push(node.val)
        inorder(node.right)
    }
    inorder(root)
    return result
};