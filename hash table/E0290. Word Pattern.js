/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  var m = new Map();
  var b = new Map();
  var str = new Array();
  str = s.split(" ");
  if (str.length != pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (m.has(pattern[i])) {
      if (str[i] != m.get(pattern[i])) return false;
    } else {
      if (b.has(str[i])) return false;
      m.set(pattern[i], str[i]);
      b.set(str[i], str[i]);
    }
  }
  return true;
};
