/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  var r = strs[0];
  for (var i = 1; i < strs.length; i++) {
    r = findLCP(r, strs[i]);
    if (!r) return r;
  }
  return r;
};
var findLCP = (sl, sr) => {
  if (!sl || !sr) return "";
  var res = "";
  for (var i = 0; i < sl.length && i < sr.length; i++) {
    if (sl[i] == sr[i]) {
      res += sl[i];
    } else {
      break;
    }
  }
  return res;
};
