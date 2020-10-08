/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  var min = Infinity;
  var max = 0;
  var sum = 0;
  salary.forEach((num) => {
    sum += num;
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });
  return (sum - min - max) / (salary.length - 2);
};
