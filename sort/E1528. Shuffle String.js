/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  var l = s.length;
  var res = new Array(l);

  for (var i = 0; i < l; i++) {
    res[indices[i]] = s[i];
  }
  return res.join("");
};
