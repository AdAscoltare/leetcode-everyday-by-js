/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  var res = [];
  for (var i = 0; i < R; i++) {
    for (var j = 0; j < C; j++) {
      res.push([i, j]);
    }
  }
  //sort
  var getDist = (r, c) => {
    return Math.abs(r - r0) + Math.abs(c - c0);
  };
  res.sort((a, b) => {
    return getDist(a[0], a[1]) - getDist(b[0], b[1]);
  });
  return res;
};
