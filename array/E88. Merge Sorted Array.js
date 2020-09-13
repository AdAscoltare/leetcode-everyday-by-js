/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//从尾部开始从大到小插入，可以避免从小到大插入时的覆盖
//也可以把num2加入到num1末尾，然后排序num1
var merge = function (nums1, m, nums2, n) {
  var i = m - 1,
    j = n - 1,
    l = m + n - 1;
  while (i >= 0 && j >= 0) {
    nums1[l--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
  while (i >= 0) {
    nums1[l--] = nums1[i--];
  }
  while (j >= 0) {
    nums1[l--] = nums2[j--];
  }
  console.log(nums1);
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
