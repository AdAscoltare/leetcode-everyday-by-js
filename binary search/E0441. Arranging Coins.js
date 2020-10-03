/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var left = 0;
  var right = Math.ceil(Math.sqrt(n * 2));
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    var cost = (mid * (mid + 1)) / 2;
    if (cost > n) {
      right = mid- 1;
    }
    //剩的还多
    else if (n - cost > mid) {
      left = mid + 1;
    }
    //不够开新的了
    else if (n - cost <= mid) {
      return mid;
    }
  }
};
