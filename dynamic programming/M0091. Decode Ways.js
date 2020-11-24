/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-24 17:01:11
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-24 21:33:10
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] == "0") {
    return 0;
  }

  const l = s.length;
  let dp = Array(l).fill(0);
  dp[0] = 1;

  for (let i = 1; i < l; i++) {
    if (dp[i - 1] == 0) {
      dp[i] = 0;
      return 0;
    }
    if (s[i] == "0") {
      if (s[i - 1] != 1 && s[i - 1] != 2) {
        return 0;
      }
      dp[i] = i > 1 ? dp[i - 2] : dp[0];
      continue;
    }
    //s[i]!=0
    dp[i] = dp[i - 1];
    const num = parseInt(s.substr(i - 1, 2));
    if (s[i - 1] != "0" && num <= 26 && num > 0) {
      if (i >= 2) {
        dp[i] = dp[i] + dp[i - 2];
      } else {
        dp[i]++;
      }
    }
  }
  return dp[l - 1];
};
