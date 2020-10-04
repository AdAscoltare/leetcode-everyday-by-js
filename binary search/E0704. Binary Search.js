/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var l = 0;
  var r = nums.length - 1;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
};
