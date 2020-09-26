/**
 * @param {string} s
 * @return {string}
 */
//尝试一下正则
var reverseVowels = function (s) {
  if (!s) return "";
  s = s.split("");
  var regex = /[aeiouAEIOU]/g;
  var length = s.length;
  var l = 0;
  var r = length - 1;
  while (l < r) {
    if (!s[l].match(regex)) {
      l++;
    } else if (!s[r].match(regex)) {
      r--;
    } else {
      if (l >= r) {
        break;
      }
      var t = s[l];
      s[l] = s[r];
      s[r] = t;
      l++;
      r--;
    }
  }
  return s.join("");
};
