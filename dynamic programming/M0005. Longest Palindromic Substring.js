/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-23 13:35:38
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-23 14:12:54
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const l = s.length;
  let dp = Array(l);
  let start = 0;
  let size = 1;
  for (let i = 0; i < l; i++) {
    dp[i] = Array(l);
    dp[i].fill(0);
    dp[i][i] = 1;
    if (i < l - 1) {
      dp[i][i + 1] = s[i] == s[i + 1] ? 1 : 0;
      if (dp[i][i + 1]) {
        start = i;
        size = 2;
      }
    }
  }
  for (let y = 2; y < l; y++) {
    for (let x = 0; x < y - 1; x++) {
      dp[x][y] = dp[x + 1][y - 1] && s[x] == s[y] ? 1 : 0;
      if (dp[x][y]) {
        if (y - x + 1 > size) {
          size = y - x + 1;
          start = x;
        }
      }
    }
  }
  return s.substr(start, size);
};
