/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-01 15:07:49
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-01 15:19:45
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var r = grid.length;
  var c = grid[0].length;
  var res = Array(r);
  for (var i = 0; i < r; i++) {
    res[i] = Array(c);
    for (var j = 0; j < c; j++) {
      res[i][j] = 0;
    }
  }
  res[0][0] = grid[0][0];
  for (var i = 1; i < r; i++) {
    res[i][0] = res[i - 1][0] + grid[i][0];
  }
  for (var i = 1; i < c; i++) {
    res[0][i] = res[0][i - 1] + grid[0][i];
  }
  for (var i = 1; i < r; i++) {
    for (var j = 1; j < c; j++) {
      res[i][j] = Math.min(res[i - 1][j], res[i][j - 1]) + grid[i][j];
    }
  }
  return res[r - 1][c - 1];
};
