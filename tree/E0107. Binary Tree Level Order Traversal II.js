/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  var arr = [];
  var search = (p, d) => {
    if (!p) {
      return;
    } else {
      if (arr.length == d) {
        arr.push([]);
      }
      var temp_arr = arr[d];
      temp_arr.push(p.val);
      search(p.left, d + 1);
      search(p.right, d + 1);
    }
  };
  search(root, 0);
  return arr.reverse();
};
