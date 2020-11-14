/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-14 20:30:46
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-14 21:32:36
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var time = k % nums.length;
  if (time == 0 || nums.length == 1) {
    return;
  }
  var target = time;
  var curr = 0;
  var targetVal = nums[0];
  var start = 0;
  for (var i = 0; i < nums.length; i++) {
    if (i != 0 && curr == start) {
      curr = (curr + 1) % nums.length;
      start = curr;
      target = (curr + time) % nums.length;
      targetVal = nums[curr];
    }
    var temp = nums[target];
    nums[target] = targetVal;
    targetVal = temp;
    curr = target;
    target = (curr + time) % nums.length;
  }
};

