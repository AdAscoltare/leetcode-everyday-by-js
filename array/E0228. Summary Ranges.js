/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-27 15:41:56
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-27 15:46:30
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  }
  if (nums.length == 1) {
    return [nums[0] + ""];
  }
  var res = [];
  var slow = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] - nums[slow] == i - slow) {
    } else {
      if (i - 1 == slow) {
        res.push(nums[slow] + "");
      } else {
        res.push(nums[slow] + "->" + nums[i - 1]);
      }
      slow = i;
    }
  }
  if (i - 1 == slow) {
    res.push(nums[slow] + "");
  } else {
    res.push(nums[slow] + "->" + nums[i - 1]);
  }
  return res;
};
