/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//基础方法，可以用二项式系数gkd
var getRow = function (rowIndex) {
  var row = new Array();
  row[0] = new Array();
  row[0].push(1);
  for (var i = 1; i <= rowIndex; i++) {
    row[i] = new Array();
    row[i].push(1);
    for (var j = 0; j < row[i - 1].length - 1; j++) {
      row[i].push(row[i - 1][j] + row[i - 1][j + 1]);
    }
    row[i].push(1);
  }
  return row[rowIndex];
};
