/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//就这？
//索引为nums[i],值为i
var containsNearbyDuplicate = function (nums, k) {
  var m = new Map();
  for (var i = 0; i < nums.length; i++) {
    var t = nums[i];
    if (m.has(t) && i - m.get(t) <= k) {
      return true;
    }
    m.set(t, i);
  }
  return false;
};
