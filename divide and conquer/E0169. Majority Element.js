/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var counter = 1;
  var major = nums[0];
  for (var i = 1; i < nums.length; i++) {
    if (!counter) {
      major = nums[i];
    }
    if (nums[i] == major) {
      counter++;
    } else {
      counter--;
    }
  }
  return major;
};
