/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-21 17:13:07
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-21 18:08:49
 */

/**
 * @name: 
 * @test: test font
 * @msg: 就硬展
 * @param {*}
 * @return {*}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => {
    return a - b;
  });
  var res = [];
  var dfs = (t, curr, start) => {
    if (t == 0) {
      res.push(curr);
    }
    if (t < 0) {
      return;
    }
    for (var i = start; i < candidates.length; i++) {
      dfs(t - candidates[i], curr.concat(candidates[i]), i);
    }
  };
  dfs(target, [], 0);

  return res;
};
