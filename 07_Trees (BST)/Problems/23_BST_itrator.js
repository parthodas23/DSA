var BSTIterator = function (root) {
  this.stack = [];
  const pushLeft = (node) => {
    if (!node) return;

    while (node) {
      this.stack.push(node.left);
      node = node.left;
    }
  };
  pushLeft(root);
  this.pushLeft = pushLeft;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let poped = this.stack.pop();
  if (poped.right) {
    this.pushLeft(poped.right);
  }

  return poped.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length ? true : false;
};
