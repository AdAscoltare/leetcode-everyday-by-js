/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  var middle = -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      middle = i;
      break;
    }
  }
  var res = [];
  //处理极端情况
  if (middle == -1) {
    for (var i = A.length - 1; i >= 0; i--) {
      res.push(A[i] * A[i]);
    }
    return res;
  }
  if (middle == 0) {
    for (var i = 0; i < A.length; i++) {
      res.push(A[i] * A[i]);
    }
    return res;
  }
  //处理正常情况
  var left = middle - 1;
  var right = middle;
  while (right < A.length || left >= 0) {
    if (A[right] < Math.abs(A[left]) || left == -1) {
      res.push(A[right] * A[right]);
      right++;
    } else if (A[right] >= Math.abs(A[left]) || right == A.length) {
      res.push(A[left] * A[left]);
      left--;
    }
  }
  return res;
};
