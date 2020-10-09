/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  s.sort((a, b) => {
    return a - b;
  });
  g.sort((a, b) => {
    return a - b;
  });
  var iter_g = 0;
  var iter_s = 0;
  while (iter_g < g.length && iter_s < s.length) {
    if (s[iter_s] >= g[iter_g]) {
      iter_g++;
    }
    iter_s++;
  }
  return iter_g;
};
