/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) {
    return null;
  }
  var mid = nums.length >>> 1;
  var root = new TreeNode(nums[mid]);
  var addNode = (r, dir, start, end) => {
    if (start > end) {
      return;
    }
    var mid = Math.ceil((start + end) / 2);
    var curr_node = new TreeNode(nums[mid]);
    if (dir == 1) {
      r.left = curr_node;
    } else {
      r.right = curr_node;
    }
    addNode(curr_node, 1, start, mid - 1);
    addNode(curr_node, 0, mid + 1, end);
  };

  addNode(root, 1, 0, mid - 1);
  addNode(root, 0, mid + 1, nums.length - 1);
  return root;
};
