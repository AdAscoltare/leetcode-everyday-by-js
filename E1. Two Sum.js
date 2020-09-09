/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var newmap = new Map();
  for (var i = 0; i < nums.length; i++) {
    var k = target - nums[i];
    if (newmap.has(k)) {
      return [i, newmap.get(k)];
    }
    newmap.set(nums[i], i);
  }
};
