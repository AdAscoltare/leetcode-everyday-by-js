/**
 * @param {string} s
 * @return {number}
 */
//代码写法
/*
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  var find = 0;
  var l = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    if (s[i] == " " && find) {
      return l;
    }
    if (s[i] == " " && !find) {
      continue;
    }
    find = 1;
    l++;
  }
  return l;
};
*/
//用内置函数操作,比手写的慢点点
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};
