/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  var total = 0;
  nums.forEach((num) => {
    total += num;
  });
  var sum = 0;
  var i = 0;
  var res = [];
  while (sum <= total) {
    sum += nums[i];
    total -= nums[i];
    res.push(nums[i]);
    i++;
  }
  return res;
};
