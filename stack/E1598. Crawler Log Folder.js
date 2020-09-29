/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  var step = 0;
  for (var i = 0; i < logs.length; i++) {
    switch (logs[i]) {
      case "../": {
        step = step > 0 ? step - 1 : 0;
        break;
      }
      case "./": {
        break;
      }
      default: {
        step++;
        break;
      }
    }
  }
  return step;
};
