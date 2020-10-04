/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  var l = 0;
  var r = letters.length;

  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    if (letters[mid] > target) r = mid;
    else l = mid + 1;
  }
  if (l == letters.length) return letters[0];
  return letters[l];
};
