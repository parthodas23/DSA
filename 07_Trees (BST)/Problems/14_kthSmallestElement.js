const smallest = (root, k) => {
  let answer = null;
  let count = 0;

  const inorder = (node) => {
    if (!node || answer !== null) return;

    inorder(node.left);

    count++;
    if (count === k) {
      answer = node.val;
      return;
    }

    inorder(node.right);
  };

  inorder(root);

  return answer;
};
