/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-10 20:56:16
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-10 21:10:16
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  var l = triangle.length;
  if (!l) {
    return 0;
  }
  if (l == 1) {
    return triangle[0][0];
  }
  var dp = Array(l);
  for (var i = 0; i < l; i++) {
    dp[i] = Array(l);
    dp[i].fill(Infinity);
  }
  var res = Infinity;
  var dfs = (index, level, curr) => {
    if (level == l) {
      res = Math.min(curr, res);
      return;
    }
    if (index < 0 || index >= triangle[level].length) {
      return;
    }

    curr += triangle[level][index];
    if (curr >= dp[level][index]) {
      return;
    } else {
      dp[level][index] = curr;
    }
    dfs(index, level + 1, curr);
    dfs(index + 1, level + 1, curr);
  };
  dfs(0, 0, 0);
  return res;
};
