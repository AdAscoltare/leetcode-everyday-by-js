/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//很简单一个题，找到第一个大于等于target的下标即可
var searchInsert = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};
