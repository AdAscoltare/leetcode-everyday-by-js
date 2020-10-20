/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }
  var left = 0;
  var right = nums.length - 1;
  while (left < right) {
    var mid = (left + right) >>> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (target != nums[left]) {
    return [-1, -1];
  }
  var start = left;
  var end = start;
  while (nums[end] == target) {
    end++;
  }
  return [start, end - 1];
};
