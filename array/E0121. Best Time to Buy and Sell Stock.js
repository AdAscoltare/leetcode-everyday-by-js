/**
 * @param {number[]} prices
 * @return {number}
 */
//有点贪心的思想
//首先遍历过程中不断寻找最低价
//若不为最低价则必然有利息，此时选取较高利息
//遍历一轮后即可得到最大利益，但是此时存在minprize里的最低价并不一定是整个数组中的最低价
var maxProfit = function (prices) {
  var min_prize = prices[0];
  var profix = 0;
  prices.slice(1).forEach((num) => {
    if (num < min_prize) {
      min_prize = num;
    } else {
      profix = profix < num - min_prize ? num - min_prize : profix;
    }
  });
  return profix;
};
