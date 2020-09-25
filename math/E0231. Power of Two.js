/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  while (n) {
    if (n % 2 && n != 1) return false;
    n = Math.floor(n / 2);
  }
  return true;
};
