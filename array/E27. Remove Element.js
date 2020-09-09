/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//类似26题，快慢指针，fast等于val的时候slow不动，至fast找到后一个不为val的值时将slow++覆盖；
var removeElement = function (nums, val) {
  var slow = -1;
  for (var fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != val) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
};
