/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//这个为啥是二分搜索的题？
//不是双指针？
var isSubsequence = function (s, t) {
  var slow = 0;
  for (var i = 0; i < t.length; i++) {
    if (t[i] == s[slow]) {
      slow++;
    }
  }
  if (slow == s.length) {
    return true;
  }
  return false;
};
