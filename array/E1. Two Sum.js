/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//hash表，记录已查找过的值，每向后一个就在表中查找是否存在解，然后把自己加入hash表
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
