/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  var counter = 0;
  var l_num = 0;
  var r_num = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "R") {
      r_num++;
    } else {
      l_num++;
    }
    if (l_num == r_num) {
      counter++;
      l_num = 0;
      r_num = 0;
    }
  }
  return counter;
};
