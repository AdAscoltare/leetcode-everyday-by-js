/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  var slow = 0;
  for (var fast = 0; fast < typed.length; fast++) {
    if (typed[fast] == name[slow]) {
      slow++;
    } else if (typed[fast] != name[slow] && typed[fast] != typed[fast - 1]) {
      return false;
    }
  }
  if (slow == name.length) {
    return true;
  }
  return false;
};
