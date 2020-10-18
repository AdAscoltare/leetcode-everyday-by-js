/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var l = nums.length - 1;
  nums.sort((a, b) => {
    return a - b;
  });
  var sum = Infinity;
  var gap = Infinity;
  for (var i = 0; i < l - 1; i++) {
    var left = i + 1;
    var right = l;
    var standard = nums[i];
    while (left < right) {
      var t_sum = standard + nums[left] + nums[right];
      var t_gap = Math.abs(t_sum - target);
      if (!t_gap) {
        return target;
      }
      if (t_gap < gap) {
        gap = t_gap;
        sum = t_sum;
      } else if (t_sum - target > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return sum;
};
