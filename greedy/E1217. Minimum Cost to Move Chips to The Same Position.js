/**
 * @param {number[]} position
 * @return {number}
 */
//、妙啊
var minCostToMoveChips = function (position) {
  var even = 0;
  var odd = 0;
  position.forEach((num) => {
    num % 2 ? odd++ : even++;
  });
  return odd > even ? even : odd;
};
