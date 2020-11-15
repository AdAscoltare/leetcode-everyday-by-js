/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-15 14:30:40
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-15 15:06:56
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  var l = nums.length;
  if (!l) {
    return 0;
  }
  var res = l + 1;
  var sum = 0;
  var slow = 0;
  for (var i = 0; i < l; i++) {
    sum += nums[i];
    while (sum >= s) {
      res = Math.min(res, i - slow + 1);
      sum -= nums[slow];
      slow++;
    }
  }
  return res == l + 1 ? 0 : res;
};
