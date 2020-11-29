/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-29 14:31:52
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-29 14:52:16
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  if (n < 6) {
    return n;
  }
  let dp = Array(n).fill(0);
  dp[0] = 1;
  let n2 = 0;
  let n3 = 0;
  let n5 = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[n2] * 2, dp[n3] * 3, dp[n5] * 5);
    if (dp[i] == dp[n2] * 2) {
      n2++;
    }
    if (dp[i] == dp[n3] * 3) {
      n3++;
    }
    if (dp[i] == dp[n5] * 5) {
      n5++;
    }
  }
  //console.log(dp);
  return dp[n - 1];
};
//console.log(nthUglyNumber(10));
