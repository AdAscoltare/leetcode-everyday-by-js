/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  var zero_num = 0;
  for (var i = 5; i <= n; i *= 5) {
    zero_num += Math.floor(n / i);
  }
  return zero_num;
};
