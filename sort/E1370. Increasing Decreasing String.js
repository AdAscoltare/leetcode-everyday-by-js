/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let arr = s.split("").sort();
  let set = Array.from(new Set(arr));
  let res = "";
  while (arr.length > 0) {
    for (let x of set) {
      res += x;
      arr.splice(arr.indexOf(x), 1);
    }
    set = Array.from(new Set(arr));
    for (let y of set.reverse()) {
      res += y;
      arr.splice(arr.indexOf(y), 1);
    }
    set = Array.from(new Set(arr));
  }
  return res;
};
