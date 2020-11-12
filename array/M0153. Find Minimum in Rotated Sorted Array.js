/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-12 17:14:10
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-12 17:18:30
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  var head = nums[0];
  var l = nums.length;
  if (l == 1) {
    return head;
  }
  if (nums[l - 1] > head) {
    return head;
  }
  var left = 0;
  var right = l - 1;
  while (left < right) {
    var mid = (left + right) >>> 1;
    if (nums[mid] < head) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};
