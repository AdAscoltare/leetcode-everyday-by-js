/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  //考虑n==1
  if (n == 1) return 1;
  var left = 1;
  var right = n;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var res = guess(mid);
    switch (res) {
      case -1: {
        right = mid - 1;
        break;
      }
      case 1: {
        left = mid + 1;
        break;
      }
      default: {
        return mid;
        break;
      }
    }
  }
};
