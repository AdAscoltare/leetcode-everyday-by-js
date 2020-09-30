/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  while (stones.length > 1) {
    var bigger = stones.pop();
    var smaller = stones.pop();
    var left = bigger - smaller;
    if (left) {
      stones.push(left);
      stones.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    }
  }
  return stones.length ? stones[0] : 0;
};
