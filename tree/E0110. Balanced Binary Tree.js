var isBalanced = function (root) {
  if (root == null) return true;
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  return (
    Math.abs(leftDepth - rightDepth) <= 1 &&
    isBalanced(root.right) &&
    isBalanced(root.left)
  );
};

function maxDepth(root) {
  return root == null
    ? 0
    : Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
}
