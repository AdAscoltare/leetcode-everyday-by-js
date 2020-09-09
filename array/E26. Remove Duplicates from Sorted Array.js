/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  //slow是慢指针，fast是快指针
  var slow = 0;
  for (var fast = 1; fast < nums.length; fast++) {
    if (nums[fast] != nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};
