/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */

var findSolution = function (customfunction, z) {
  var func = customfunction.f;
  var res = [];
  for (var i = 1; i <= z; i++) {
    for (var j = 1; j <= z; j++) {
      if (func(i, j) == z) res.push([i, j]);
    }
  }
  return res;
};
