/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  var stack = [];
  for (var i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] == S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join("");
};
