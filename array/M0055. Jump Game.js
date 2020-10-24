/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-24 15:00:44
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-24 15:44:26
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var end = nums.length - 1;
  var book = Array(nums.length);
  book[end] = 1;
  for (var i = end - 1; i >= 0; i--) {
    var maxPos = Math.min(i + nums[i], end);
    for (var j = maxPos; j > i; j--) {
      if (book[j] == 1) {
        book[i] = 1;
        break;
      }
    }
    if (book[i] == 0) {
      book[i] = -1;
    }
  }
  return book[0] == 1;
};
