/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  var l = A[0].length;
  var l_A = A.length;
  var counter = 0;
  for (var i = 0; i < l; i++) {
    var base = A[0][i];
    for (var j = 1; j < l_A; j++) {
      if (A[j][i] < base) {
        counter++;
        break;
      }
      base = A[j][i];
    }
  }
  return counter;
};
