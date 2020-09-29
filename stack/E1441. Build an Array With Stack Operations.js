/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  var res = [];
  var lable = 0;
  var l = target.length - 1;
  for (var i = 1; i <= n; i++) {
    if (lable > l) break;
    if (target[lable] == i) {
      res.push("Push");
      lable++;
    } else {
      res.push("Push", "Pop");
    }
  }
  return res;
};
