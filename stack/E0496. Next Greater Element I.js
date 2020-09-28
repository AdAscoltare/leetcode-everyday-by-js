/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  var m = new Map();
  var res = [];
  for (var i = 0; i < nums2.length; i++) {
    m.set(nums2[i], i);
  }

  var l1 = nums1.length;
  outloop: for (var i = 0; i < l1; i++) {
    var t = nums1[i];
    var j = m.get(t);
    for (; j < nums2.length; j++) {
      if (nums2[j] > t) {
        res.push(nums2[j]);
        continue outloop;
      }
    }
    res.push(-1);
  }
  return res;
};
console.log(nextGreaterElement([3, 2, 1], [1, 2, 5, 3, 4]));
