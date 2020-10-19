/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //找到起始位置
  var left = 0;
  var right = nums.length - 1;
  if (left == right) {
    return nums[left] == target ? left : -1;
  }
  if (nums[nums.length - 1] > nums[0]) {
  } else {
    while (left < right) {
      var mid = (left + right) >>> 1;
      if (nums[mid] >= nums[0]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  }

  //判断搜索范围
  var start = left;
  if (start == 0) {
    left = 0;
    right = nums.length - 1;
  } else if (target >= nums[0]) {
    left = 0;
    right = start - 1;
  } else {
    left = start;
    right = nums.length - 1;
  }
  if (left == right) {
    return nums[left] == target ? left : -1;
  }
  //二分搜索
  while (left <= right) {
    var mid = (left + right) >>> 1;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
