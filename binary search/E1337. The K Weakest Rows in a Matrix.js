/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  var l = mat.length;
  var row_l = mat[0].length - 1;
  var res = [];
  mat.forEach((num, index) => {
    var left = 0;
    var right = row_l;
    while (left <= right) {
      var mid = (left + right) >>> 1;
      if (num[mid] == 1) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    res.push([left, index]);
  });
  res.sort((a, b) => {
    return a[0] - b[0];
  });
  res = res.slice(0, k);
  var r = [];
  res.forEach((num) => {
    r.push(num[1]);
  });
  return r;
};
