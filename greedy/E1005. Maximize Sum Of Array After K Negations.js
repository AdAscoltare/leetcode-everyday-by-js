/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
  A.sort((a, b) => {
    return a - b;
  });
  for (var i = 0; i < K; i++) {
    if (A[i] < 0) {
      A[i] = -A[i];
    } else {
      var left = K - i;
      if (left % 2) {
        if (i > 0 && A[i - 1] < A[i]) {
          A[i - 1] = -A[i - 1];
        } else {
          A[i] = -A[i];
        }
      } else {
        break;
      }
    }
  }
  var sum = 0;
  A.forEach((num) => {
    sum += num;
  });
  return sum;
};
