/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var m = new Map();
  var r = new Array();
  nums1.forEach((num) => {
    if (m.has(num)) {
      m.set(num, m.get(num) + 1);
    } else {
      m.set(num, 1);
    }
  });
  nums2.forEach((num) => {
    if (m.has(num)) {
      var t = m.get(num);
      if (t != 0) {
        r.push(num);
        m.set(num, t - 1);
      }
    }
  });
  return r;
};
