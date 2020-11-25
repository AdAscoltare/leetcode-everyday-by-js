/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-25 13:34:59
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-25 14:01:52
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const l = s.length;
  let dp = Array(l).fill(false);
  for (let word in wordDict) {
    if (s[0] == word) {
      dp[0] = true;
      break;
    }
  }
  //dp[i]=for(every word) dp[i-word.len]&&s[i-word.len,i] in words
  // if(i-word.len<0):dp[i]=s[0,i] in words
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      const wordLen = wordDict[j].length;
      if (i - wordLen == -1) {
        if (s.startsWith(wordDict[j])) {
          dp[i] = true;
          continue;
        }
      } else if (i - wordLen < -1) {
        continue;
      } else {
        if (s.startsWith(wordDict[j], i - wordLen + 1) && dp[i - wordLen]) {
          dp[i] = true;
          break;
        }
      }
    }
  }
  return dp[l - 1];
};
