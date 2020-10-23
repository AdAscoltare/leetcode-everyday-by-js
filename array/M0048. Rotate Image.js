/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-23 09:02:14
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-23 09:17:08
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  //先转置
  var l = matrix.length;
  for (var i = 0; i < l; i++) {
    for (var j = i + 1; j < l; j++) {
      var t = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = t;
    }
  }
  //再反转
  for (var i = 0; i < l; i++) {
    for (var j = 0; j < l / 2; j++) {
      var t = matrix[i][j];
      matrix[i][j] = matrix[i][l - 1 - j];
      matrix[i][l - 1 - j] = t;
    }
  }
};
