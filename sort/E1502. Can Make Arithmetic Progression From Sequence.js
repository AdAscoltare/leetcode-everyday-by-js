/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  var step = arr[1] - arr[0];
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != step) {
      return false;
    }
  }
  return true;
};
