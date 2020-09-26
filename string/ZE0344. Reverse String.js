/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var l = s.length;
  if (!l) return [];
  for (var i = 0; i < l / 2; i++) {
    var t = s[i];
    s[i] = s[l - 1 - i];
    s[l - 1 - i] = t;
  }
};
