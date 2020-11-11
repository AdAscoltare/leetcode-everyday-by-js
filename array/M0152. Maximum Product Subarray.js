/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-11 21:47:51
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-11 22:10:31
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  var l = nums.length;
  if (!l) {
    return 0;
  }
  var dp = Array(l).fill(-Infinity);
  var min = Array(l).fill(-Infinity);
  dp[0] = nums[0];
  min[0] = nums[0];
  for (var i = 1; i < l; i++) {
    dp[i] = Math.max(dp[i - 1] * nums[i], nums[i], min[i - 1] * nums[i]);
    min[i] = Math.min(dp[i - 1] * nums[i], nums[i], min[i - 1] * nums[i]);
  }
  var res = -Infinity;
  dp.forEach((num) => {
    if (num > res) {
      res = num;
    }
  });
  return res;
};
