/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-21 13:50:06
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-21 14:13:02
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const l = cost.length;
  let before2 = cost[0];
  let before1 = cost[1];
  let target = 0;
  if (l == 2) {
    return Math.min(before2, before1);
  }
  for (let i = 2; i < l; i++) {
    target = cost[i] + Math.min(before1, before2);
    before2 = before1;
    before1 = target;
  }
  return Math.min(target, before2);
};
