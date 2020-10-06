/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  var odd = [];
  var even = [];
  A.forEach((num) => {
    if (num % 2) {
      odd.push(num);
    } else {
      even.push(num);
    }
  });
  var res = [];
  var l = odd.length;
  for (var i = 0; i < l; i++) {
    res.push(even[i], odd[i]);
  }
  return res;
};
