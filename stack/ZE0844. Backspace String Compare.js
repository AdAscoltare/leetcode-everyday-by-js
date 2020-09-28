/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  var stack_S = [];
  var stack_T = [];
  for (var i = 0; i < S.length; i++) {
    if (S[i] == "#") {
      stack_S.pop();
    } else {
      stack_S.push(S[i]);
    }
  }
  for (var i = 0; i < T.length; i++) {
    if (T[i] == "#") {
      stack_T.pop();
    } else {
      stack_T.push(T[i]);
    }
  }

  var ls = stack_S.length;
  var lt = stack_T.length;
  if (ls != lt) return false;
  for (var i = 0; i < ls; i++) {
    if (stack_T[i] != stack_S[i]) return false;
  }
  return true;
};
