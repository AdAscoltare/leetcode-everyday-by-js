/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-25 14:40:08
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-25 14:57:10
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (var i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i + 1][0] = intervals[i][0];
      intervals[i + 1][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
      intervals.splice(i, 1);
      i--;
    }
  }
  return intervals;
};
console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
);
