/**
 * @param {number[]} nums
 * @return {number}
 */
//快慢指针，遇到要消除的值时先保留，fast找到下一个保留值的时候将slow++覆盖
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
