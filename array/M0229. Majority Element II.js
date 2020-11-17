/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-17 17:48:36
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-17 18:09:22
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let l = nums.length;
  let map = new Map();
  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  let res = [];
  let n = Math.floor(l / 3);
  map.forEach((v, k) => {
    if (v > n) {
      res.push(k);
    }
  });
  return res;
};
