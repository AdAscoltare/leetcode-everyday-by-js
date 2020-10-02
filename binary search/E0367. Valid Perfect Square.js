/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) return true;
  var left = 1;
  var right = Math.floor(num / 2);
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var pow = mid * mid;
    if (pow == num) return true;
    else if (pow > num) right = mid - 1;
    else left = mid + 1;
  }
  return false;
};
