/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-20 08:57:44
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-20 09:09:02
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const l = nums.length;
  if (l == 0) {
    return 0;
  }
  if (l == 1) {
    return nums[0];
  }

  let res = Array(l);
  res[0] = nums[0];
  res[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < l; i++) {
    res[i] = Math.max(nums[i] + res[i - 2], res[i - 1]);
  }
  return res[l - 1];
};
rob([1, 2, 3, 1]);
