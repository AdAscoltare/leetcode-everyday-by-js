/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-09 14:04:38
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-09 14:44:38
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  var l = nums.length;
  var buffer = [];
  var dfs = (index) => {
    res.push(buffer.slice());
    for (var i = index; i < l; i++) {
      if (i > index && nums[i] == nums[i - 1]) {
        continue;
      }
      buffer.push(nums[i]);
      dfs(i + 1);
      buffer.pop();
    }
  };
  dfs(0);
  return res;
};
