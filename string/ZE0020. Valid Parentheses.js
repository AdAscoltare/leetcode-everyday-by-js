/**
 * @param {string} s
 * @return {boolean}
 */
//就栈呗
var isValid = function (s) {
  var stack = [];
  var m = new Map();
  m.set(")", "(");
  m.set("]", "[");
  m.set("}", "{");
  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    } else {
      if (m.get(s[i]) != stack.pop()) return false;
    }
  }
  if (stack.length) return false;
  return true;
};
