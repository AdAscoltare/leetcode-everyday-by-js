/*
 * @Descripttion: 
 * @version: 
 * @Author: Wang Wenzheng
 * @Date: 2020-11-13 21:47:25
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-13 22:06:52
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var l = 0, r = nums.length - 1;
        while (l < r) {
            var mid = (l + r)>>>1;
            if (nums[mid] > nums[mid + 1])
                r = mid;
            else
                l = mid + 1;
        }
        return l;
};