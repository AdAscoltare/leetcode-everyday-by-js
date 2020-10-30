/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-30 20:42:38
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-30 20:55:50
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  //二维数组
  var res = Array(m);
  for (var i = 0; i < m; i++) {
    res[i] = Array(n);
    for (var j = 0; j < n; j++) {
      res[i][j] = 0;
    }
  }
  for (var i = 0; i < m; i++) {
    res[i][0] = 1;
  }
  for (var j = 0; j < n; j++) {
    res[0][j] = 1;
  }
  //计算
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      res[i][j] = res[i - 1][j] + res[i][j - 1];
    }
  }
  return res[m - 1][n - 1];
};
