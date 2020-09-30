/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var map = new Map();
  for (var i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      return [1 + map.get(numbers[i]), 1 + i];
    } else {
      map.set(target - numbers[i], i);
    }
  }
};
