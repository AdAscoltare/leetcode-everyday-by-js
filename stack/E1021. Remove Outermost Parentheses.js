/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  if (!S) return "";
  var res = "";
  var stack = [];
  var start = 0;
  for (var i = 0; i < S.length; i++) {
    if (S[i] == "(") {
      stack.push(i);
    } else {
      start = stack.pop();
      if (!stack.length) {
        res += S.slice(start + 1, i);
      }
    }
  }
  return res;
};
