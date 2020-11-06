/*
 * @Descripttion:
 * @version:
 * @Author: Wang Wenzheng
 * @Date: 2020-11-06 13:49:59
 * @LastEditors: Wang Wenzheng
 * @LastEditTime: 2020-11-06 14:45:27
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var r = board.length;
  var c = board[0].length;
  //book
  var book = new Array(r);
  for (var i = 0; i < r; i++) {
    book[i] = new Array(c);
    book[i].fill(0);
  }
  var flag = 0;
  //dfs
  var dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  var dfs = (x, y, pos) => {
    if (pos == word.length) {
      return true;
    }
    if (x < 0 || x >= r || y < 0 || y >= c || book[x][y] == 1) {
      return false;
    }

    if (board[x][y] == word[pos]) {
      book[x][y] = 1;
      var flag = 0;
      for (var i = 0; i < 4; i++) {
        if (dfs(x + dir[i][0], y + dir[i][1], pos + 1)) {
          flag = 1;
          break;
        }
      }
      book[x][y] = 0;
      if (flag) {
        return true;
      }
    }
  };
  //计算
  for (var i = 0; i < r; i++) {
    for (var j = 0; j < c; j++) {
      dfs(i, j, 0);
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
