/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  var stack = [s[0]];
  for (var i = 1; i < s.length; i++) {
    if (!stack.length) {
      stack.push(s[i]);
      continue;
    }
    if (
      Math.abs(s[i].charCodeAt() - stack[stack.length - 1].charCodeAt()) == 32
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
