/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  var m = new Map();
  for (var i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      m.set(s[i], m.get(s[i]) + 1);
    } else {
      m.set(s[i], 1);
    }
    if (m.has(t[i])) {
      m.set(t[i], m.get(t[i]) - 1);
    } else {
      m.set(t[i], -1);
    }
  }
  for (var item of m.values()) {
    if (item) return false;
  }
  return true;
};