/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var flag = 1;
  if (x < 0) {
    x = -x;
    flag = -1;
  }
  var total = 0;
  while (x != 0) {
    var t = x % 10;
    x = (x - t) / 10;
    total *= 10;
    total += t;
    console.log(total);
  }
  total = flag * total;

  if (total > 2147483647 || total < -2147483648) return 0;
  return total;
};
reverse(123);
