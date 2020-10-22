/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-22 20:20:35
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-22 20:49:38
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => {
    return a - b;
  });
  var res = [];
  var dfs = (t, curr, s) => {
    if (t == 0) {
      res.push(curr);
    }
    if (t < 0) {
      return;
    }
    var before = 0;
    for (var i = s; i < candidates.length; i++) {
      if (candidates[i] == before) {
        continue;
      }
      before = candidates[i];
      dfs(t - candidates[i], curr.concat(candidates[i]), i + 1);
    }
  };
  dfs(target, [], 0);
  return res;
};
