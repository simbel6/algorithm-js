/**
 * 98. 验证二叉搜索树
 */

var isValidBST = function (root, min, max) {
  if (root === null) return true;
  if (min !== null && min >= root.val) return false;
  if (max !== null && max <= root.val) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
