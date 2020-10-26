/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-10-26 14:26:00
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-10-26 14:31:49
 */
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) {
    return [newInterval];
  }
  var res = [];
  for (var i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
    } else {
      break;
    }
  }
  for (; i < intervals.length; i++) {
    if (intervals[i][0] > newInterval[1]) {
      break;
    }
    newInterval[0] =
      newInterval[0] > intervals[i][0] ? intervals[i][0] : newInterval[0];
    newInterval[1] =
      newInterval[1] > intervals[i][1] ? newInterval[1] : intervals[i][1];
  }
  res.push(newInterval);
  for (; i < intervals.length; i++) {
    res.push(intervals[i]);
  }
  return res;
};
