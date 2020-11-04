/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-04 16:10:26
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-04 16:44:48
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var l = 0;
  var i = 0;
  var r = nums.length - 1;
  while (i < nums.length && i <= r) {
    if (nums[i] == 0) {
      nums[i] = nums[l];
      nums[l] = 0;
      l++;
      i++;
    } else if (nums[i] == 2) {
      nums[i] = nums[r];
      nums[r] = 2;
      r--;
    } else {
      i++;
    }
  }
};
