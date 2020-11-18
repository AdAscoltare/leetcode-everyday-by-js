/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-18 17:10:35
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-18 17:31:25
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const l = nums.length;
  if (l == 0) {
    return [];
  }
  if (l == 1) {
    return [0];
  }

  let lp = [];
  let rp = [];
  //可以预设长度从而减少插头插尾时间复杂度
  lp.push(1);
  for (let i = 1; i < l; i++) {
    lp.push(lp[i - 1] * nums[i - 1]);
  }
  rp.unshift(1);
  for (let i = l - 1; i > 0; i--) {
    rp.unshift(rp[0] * nums[i]);
  }
  //console.log(lp, rp);
  let res = [];
  for (let i = 0; i < l; i++) {
    res.push(lp[i] * rp[i]);
  }
  return res;
};
productExceptSelf([1, 2, 3, 4]);
