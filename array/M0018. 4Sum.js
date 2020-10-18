/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort((a, b) => {
    return a - b;
  });
  var l = nums.length - 1;
  var res = [];
  var last_i = Infinity;
  for (var i = 0; i < l - 2; i++) {
    if (i && nums[i] == last_i) {
      continue;
    }
    last_i = nums[i];
    var last_j = Infinity;
    for (var j = i + 1; j < l - 1; j++) {
      if (nums[j] == last_j) {
        continue;
      }
      last_j = nums[j];
      var left = j + 1;
      var right = l;
      var sum = target - nums[i] - nums[j];
      while (left < right) {
        var t_sum = nums[left] + nums[right];
        if (t_sum == sum) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) {
            left++;
          }
          while (nums[[right] == nums[right - 1]]) {
            right--;
          }
          left++;
          right--;
        } else if (t_sum > sum) {
          right--;
        } else {
          left++;
        }
        if (left >= right) {
          break;
        }
      }
    }
  }
  return res;
};
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
