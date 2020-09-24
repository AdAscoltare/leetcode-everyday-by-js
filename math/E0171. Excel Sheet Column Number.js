/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var l = s.length;
  var sum = 0;
  for (var i = 0; i < l; i++) {
    sum = sum * 26 + (s[i].charCodeAt() - 64);
  }
  return sum;
};
console.log(titleToNumber("AB"));
