/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-07 17:22:25
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-07 17:49:17
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (!nums.length) {
    return 0;
  }
  var slow = 1;
  for (var i = 2; i < nums.length; i++) {
    if (nums[slow - 1] != nums[i]) {
      slow++;
      nums[slow] = nums[i];
    }
  }
  return slow + 1;
};
