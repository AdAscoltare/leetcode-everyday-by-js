/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-29 15:17:56
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-29 15:34:22
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n == 0) {
    return [];
  }

  var book = Array(n);
  var res = Array(n);
  for (var i = 0; i < n; i++) {
    book[i] = Array(n);
    res[i] = Array(n);
    for (var j = 0; j < n; j++) {
      book[i][j] = 0;
      res[i][j] = 0;
    }
  }
  var dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  var r = 0;
  var c = 0;
  var dir_lab = 0;
  for (var i = 1; i <= n * n; i++) {
    res[r][c] = i;
    book[r][c] = 1;
    var next_r = r + dir[dir_lab][0];
    var next_c = c + dir[dir_lab][1];
    if (
      next_c < 0 ||
      next_c >= n ||
      next_r < 0 ||
      next_r >= n ||
      book[next_r][next_c]
    ) {
      dir_lab = (dir_lab + 1) % 4;
    }
    r += dir[dir_lab][0];
    c += dir[dir_lab][1];
  }
  return res;
};
