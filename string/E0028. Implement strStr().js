/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//在一个循环里处理
//不匹配就回退
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  var ln = needle.length - 1;
  var lh = haystack.length;
  var j = 0;
  for (var i = 0; i < lh; i++) {
    //if match
    if (haystack[i] == needle[j]) {
      if (j == ln) return i - j;
      j++;
    } else {
      i -= j;
      j = 0;
    }
  }
  return -1;
};
