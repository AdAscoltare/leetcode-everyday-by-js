/**
 * @param {number[]} digits
 * @return {number[]}
 */
//注意可能存在进位
var plusOne = function (digits) {
  var l = digits.length - 1;
  digits[l]++;
  //进位时从后往前检查
  for (var i = l; i > 0; i--) {
    //如果不进位
    if (digits[i] <= 9) {
      break;
    } else {
      digits[i] = 0;
      digits[i - 1]++;
    }
  }
  //如果第0位为10则处理
  if (digits[0] == 10) {
    digits[0] = 0;
    digits.unshift(1);
  }
  return digits;
};
