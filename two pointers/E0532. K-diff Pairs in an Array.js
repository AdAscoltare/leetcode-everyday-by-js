/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  var counter = 0;
  var memory = new Map();
  for (var i = 0; i < nums.length - 1; i++) {
    if (memory.has(nums[i])) {
      continue;
    }
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] - nums[i] > k) {
        break;
      }
      if (nums[j] - nums[i] == k) {
        counter++;
        memory.set(nums[i], 1);
        break;
      }
    }
  }
  return counter;
};
