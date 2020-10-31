/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-31 12:31:13
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-31 12:43:09
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  var res = Array(m);
  for (var i = 0; i < m; i++) {
    res[i] = Array(n);
    for (var j = 0; j < n; j++) {
      res[i][j] = 0;
    }
  }
  var r_flag = 1;
  for (var i = 0; i < m; i++) {
    if (obstacleGrid[i][0]) {
      r_flag = 0;
    }
    res[i][0] = r_flag;
  }
  var c_flag = 1;
  for (var i = 0; i < n; i++) {
    if (obstacleGrid[0][i]) {
      c_flag = 0;
    }
    res[0][i] = c_flag;
  }

  //进行计算
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 1) {
        res[i][j] = 0;
      } else {
        res[i][j] = res[i - 1][j] + res[i][j - 1];
      }
    }
  }
  return res[m - 1][n - 1];
};
