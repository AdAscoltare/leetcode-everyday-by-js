/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-02 14:49:50
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-02 15:07:33
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var m = matrix.length;
  var n = matrix[0].length;
  //first row
  var is_r = 0;
  for (var i = 0; i < n; i++) {
    if (matrix[0][i] == 0) {
      is_r = 1;
    }
  }
  for (var i = 1; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (var i = 1; i < m; i++) {
    if (matrix[i][0] == 0) {
      for (var j = 1; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (var i = 0; i < n; i++) {
    if (matrix[0][i] == 0) {
      for (var j = 1; j < m; j++) {
        matrix[j][i] = 0;
      }
    }
  }
  if (is_r) {
    for (var i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
};
