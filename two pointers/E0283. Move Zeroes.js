/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var slow = 0;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[fast]) {
      var t = nums[slow];
      nums[slow++] = nums[fast];
      nums[fast] = t;
    }
  }
};
