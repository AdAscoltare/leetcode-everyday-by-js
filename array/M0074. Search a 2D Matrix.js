/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-03 13:14:01
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-03 14:29:22
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }
  if (target < matrix[0][0]) {
    return false;
  }
  var i = 0;
  var j = matrix[0].length - 1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] == target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
