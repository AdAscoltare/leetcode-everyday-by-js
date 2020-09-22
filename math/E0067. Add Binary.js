/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//转为10进制时需要考虑数据大小
var addBinary = function (a, b) {
  if (a[0] == "0") return b;
  if (b[0] == "0") return a;
  var la = a.length;
  var lb = b.length;
  var l = 0;
  var s = 0;
  var long, short;
  if (la > lb) {
    long = a;
    short = b;
    l = la;
    s = lb;
  } else {
    long = b;
    short = a;
    l = lb;
    s = la;
  }
  var c = 0;
  var res = "";
  for (var i = 1; i <= l; i++) {
    if (s - i >= 0) {
      var t = parseInt(long[l - i]) + parseInt(short[s - i]) + c;
    } else {
      var t = parseInt(long[l - i]) + c;
    }
    res = (t % 2) + res;
    c = t > 1 ? 1 : 0;
  }
  if (c) {
    res = 1 + res;
  }
  return res;
};
console.log(addBinary("1", "111"));
