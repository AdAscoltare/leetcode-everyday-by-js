/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  var total = numBottles;
  while (numBottles >= numExchange) {
    var left = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    total += numBottles;
    numBottles += left;
  }
  return total;
};
