/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-05 17:16:16
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-05 17:28:18
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var res = [];
  var further = (curr, index) => {
    if (index >= nums.length) {
      res.push(curr);
      return;
    }
    further(curr.concat(nums[index]), index + 1);
    further(curr, index + 1);
  };
  further([], 0);
  return res;
};
