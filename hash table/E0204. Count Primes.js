/**
 * @param {number} n
 * @return {number}
 */
//1不是质数，爷哭啦
//数学优化，又哭啦
var countPrimes = function (n) {
  var m = new Map();
  var counter = 0;
  for (var i = 2; i < n; i++) {
    var is_prime = 1;
    for (let item of m.keys()) {
      //console.log(i, item);
      if (item * item > i) break;
      if (!(i % item)) {
        //console.log("not prime");
        is_prime = 0;
        break;
      }
    }
    if (is_prime) {
      m.set(i, 1);
      counter++;
    }
  }
  return counter;
};
