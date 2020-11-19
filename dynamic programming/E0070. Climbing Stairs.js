/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-19 21:27:50
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-19 21:34:17
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) {
    return n;
  }

  let before2 = 1;
  let before1 = 2;
  let target = 3;
  for (let i = 2; i < n; i++) {
    target = before1 + before2;
    before2 = before1;
    before1 = target;
  }
  return target;
};
