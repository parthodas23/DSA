const isSame = (p, q) => {
  if (!p && !q) return true;

  if (!p || !q || p.val !== q.val) return true;

  return isSame(p.left, q.left) && isSame(p.right, q.right);
};
