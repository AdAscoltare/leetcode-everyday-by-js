/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  var newStr = "";
  while (n > 0) {
    n--;
    let charCode = String.fromCharCode((n % 26) + 65);
    newStr = charCode + newStr;
    n = Math.floor(n / 26);
  }
  return newStr;
};
console.log(convertToTitle(27));
