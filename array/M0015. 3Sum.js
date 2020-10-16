/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var l = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  var res = [];
  for (var i = 0; i < l - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    var left = i + 1;
    var right = l - 1;
    var sum = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] == sum) {
        res.push([-sum, nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        right--;
        left++;
      } else if (nums[left] + nums[right] > sum) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
