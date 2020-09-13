/**
 * @param {number} numRows
 * @return {number[][]}
 */
//就嗯做
var generate = function (numRows) {
  var number = new Array();
  if (numRows == 0) {
    return number;
  }
  number[0] = new Array();
  number[0].push(1);
  for (var i = 1; i < numRows; i++) {
    number[i] = new Array();
    number[i].push(1);
    for (var j = 0; j < number[i - 1].length - 1; j++) {
      number[i].push(number[i - 1][j] + number[i - 1][j + 1]);
    }
    number[i].push(1);
  }
  return number;
};
