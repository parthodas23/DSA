class TreeNode {
  constructor(val) {
    (this.val = val), (this.left = null), (this.right = null);
  }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
const inorder = (node) => {
  if (!node) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
};
const preorder = (node) => {
  if (!node) return;
  console.log(node.val);
  preorder(node.left);
  preorder(node.right);
};
const postorder = (node) => {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.val);
};
const depth = (node) => {
  if (!node) return 0;
  return 1 + Math.max(depth(node.left), depth(node.right));
};

root.left.left = new TreeNode(4);
console.log("Inoerder");
inorder(root);
console.log("preoerder");
preorder(root);
console.log("postorder");
postorder(root);

console.log("depth");
console.log(depth(root));
