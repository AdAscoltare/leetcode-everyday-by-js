/**
 * @param {number} n
 * @return {boolean}
 */
//把每一次结果加入map，如果出现过，说明会永远循环下去
var isHappy = function (n) {
  var m = new Map();
  while (true) {
    var temp = 0;
    while (n) {
      temp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = temp;
    if (n == 1) return true;
    if (m.has(n)) return false;
    m.set(n, 1);
  }
};
