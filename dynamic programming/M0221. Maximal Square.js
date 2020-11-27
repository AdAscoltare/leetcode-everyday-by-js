/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-27 09:34:04
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-27 09:56:51
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const r = matrix.length;
  const c = matrix[0].length;
  //dp[i][j]=右下角为ch[i][j]的最大正方形
  //dp[i][j]=dp[i-1][j-1]
  let dp = Array(r);
  for (let i = 0; i < r; i++) {
    dp[i] = Array(c).fill(0);
  }

  let maxLen = 0;
  //init dp
  for (let i = 0; i < r; i++) {
    dp[i][0] = matrix[i][0] == "1" ? 1 : 0;
    if (dp[i][0]) {
      maxLen = 1;
    }
  }
  for (let i = 0; i < c; i++) {
    dp[0][i] = matrix[0][i] == "1" ? 1 : 0;
    if (dp[0][i]) {
      maxLen = 1;
    }
  }

  //make dp
  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (matrix[i][j] == "0") {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
        maxLen = maxLen < dp[i][j] ? dp[i][j] : maxLen;
      }
    }
  }
  return maxLen * maxLen;
};
