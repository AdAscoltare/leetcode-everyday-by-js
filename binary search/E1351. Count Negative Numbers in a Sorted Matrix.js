/**
 * @param {number[][]} grid
 * @return {number}
 */
//testcase太小了，遍历一遍更快，没想到吧哈哈哈
var countNegatives = function (grid) {
  var counter = grid.length * grid[0].length;
  grid.forEach((num) => {
    var l = 0;
    var r = num.length - 1;
    while (l <= r) {
      var mid = (l + r) >>> 1;
      if (num[mid] >= 0) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    counter -= l;
  });
  return counter;
};
