/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var m = new Map();
  for (var i = 0; i < s.length; i++) {
    if (m.has(t[i])) {
      if (m.get(t[i]) != s[i]) return false;
    } else {
      var flag = 0;
      m.forEach((value) => {
        if (value == s[i]) flag = 1;
      });
      if (flag) return false;
      m.set(t[i], s[i]);
    }
  }
  return true;
};
