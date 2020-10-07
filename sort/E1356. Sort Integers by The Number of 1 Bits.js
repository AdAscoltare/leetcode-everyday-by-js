/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  var calculateBits = (num) => {
    var counter = 0;
    while (num >= 0) {
      counter += num % 2;
      num = Math.floor(num / 2);
    }
    return counter;
  };
  return arr.sort((a, b) => {
    var bit_a = calculateBits(a);
    var bit_b = calculateBits(b);
    if (bit_a == bit_b) {
      return a - b;
    }
    return bit_a - bit_b;
  });
};
