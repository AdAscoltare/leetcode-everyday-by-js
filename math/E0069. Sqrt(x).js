/**
 * @param {number} x
 * @return {number}
 */
//二分法查找
var mySqrt = function (x) {
  var l = 0;
  var r = x;
  while (l <= r) {
    var m = Math.floor((l + r) / 2);
    var m2 = m ** 2;
    if (m2 == x) {
      return m;
    } else if (m2 > x) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return l - 1;
};
console.log(mySqrt(4));
