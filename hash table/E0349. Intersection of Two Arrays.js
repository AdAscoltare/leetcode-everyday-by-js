/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var m = new Map();
  var r = [];
  nums1.forEach((num) => {
    m.set(num, 1);
  });
  nums2.forEach((num) => {
    if (m.has(num) && m.get(num)) {
      r.push(num);
      m.set(num, 0);
    }
  });
  return r;
};
