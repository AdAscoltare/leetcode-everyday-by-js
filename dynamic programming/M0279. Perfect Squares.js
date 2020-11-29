/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-29 15:06:38
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-29 15:31:40
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const max = parseInt(Math.sqrt(n));

  const l = n + 1;
  let dp = Array(l).fill(Number.MAX_VALUE);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= max; j++) {
      if (i == j * j) {
        dp[i] = 1;
      } else if (i > j * j) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  }
  return dp[n];
};
