/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-16 13:36:16
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-16 14:16:16
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n > 45 || n < ((k + 1) * k) / 2) {
    return [];
  }
  var res = [];

  const bt = (currRes, currNum, currSum, currDepth) => {
    if (currDepth == k) {
      if (currSum == n) {
        res.push(currRes);
      }
      return;
    }
    if (currSum > n) {
      return;
    }
    for (let i = currNum + 1; i <= 9; i++) {
      bt(currRes.concat(i), i, currSum + i, currDepth + 1);
    }
  };

  bt([], 0, 0, 0);
  return res;
};
console.log(combinationSum3(3, 7));
