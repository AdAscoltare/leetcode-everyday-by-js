/**
 * @param {number[]} nums
 * @return {number}
 */
//dp问题
//dp[i]=max(dp[i-1]+nums[i],nums[i])
//然后在dp[i]中取最大值
var maxSubArray = function (nums) {
  var maxSum = nums;
  var max = nums[0];
  for (var i = 1; i < nums.length; i++) {
    maxSum[i] = Math.max(nums[i], maxSum[i - 1] + nums[i]);
    max = maxSum[i] > max ? maxSum[i] : max;
  }
  return max;
};
