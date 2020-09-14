/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min_prize = prices[0];
  var profix = 0;
  prices.slice(1).forEach((num, index) => {
    if (num < min_prize) {
      min_prize = num;
    } else if (num > prices[index + 2] || (index + 2) >= prices.length) {
      profix += num - min_prize;
      min_prize = num;
    }
  });
  return profix;
};
