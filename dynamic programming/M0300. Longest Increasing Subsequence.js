/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-30 13:54:11
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-30 14:06:01
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const l = nums.length;
  let dp = Array(l).fill(0);
  dp[0] = 1;
  let res = 1;
  //dp[i]=maxlen(0,i)
  for (let i = 1; i < l; i++) {
    let max = 1;
    for (let j = 0; j < i; j++) {
      let curr = 1;
      if (nums[i] > nums[j]) {
        curr = dp[j] + 1;
      }
      if (curr > max) {
        max = curr;
      }
    }
    dp[i] = max;
    if (max > res) {
      res = max;
    }
  }
  //console.log(dp);

  return res;
};
//slengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
