/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-28 15:38:28
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-28 16:24:37
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//高斯求和后减去
var missingNumber = function (nums) {
  var res = 0;
  nums.forEach((num) => {
    res += num;
  });
  var l = nums.length;
  var total = (l * (l + 1)) / 2;
  var miss = total - res;
  return miss;
};
