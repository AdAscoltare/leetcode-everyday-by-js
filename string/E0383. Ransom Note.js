/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var ransom_map = new Object();
  if (!ransomNote) return true;
  if (!magazine) return false;
  for (var i = 0; i < magazine.length; i++) {
    if (ransom_map[magazine[i]]) {
      ransom_map[magazine[i]]++;
    } else {
      ransom_map[magazine[i]] = 1;
    }
  }
  for (var i = 0; i < ransomNote.length; i++) {
    if (ransom_map[ransomNote[i]] > 0) {
      ransom_map[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
