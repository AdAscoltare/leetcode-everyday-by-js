/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-26 13:55:30
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-26 14:07:16
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const l = nums.length;
  if (l == 1) {
    return nums[0];
  }
  let dp = Array(l).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < l - 1; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  let res = dp[l - 2];
  //从第二个开始偷
  dp[0] = 0;
  dp[1] = nums[1];
  dp[2] = Math.max(nums[1], nums[2]);
  for (let i = 3; i < l; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return res > dp[l - 1] ? res : dp[l - 1];
};
