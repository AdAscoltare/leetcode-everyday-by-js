/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (n, paths) {
  var graph = Array(n + 1);
  for (var i = 0; i < graph.length; i++) {
    graph[i] = Array();
  }
  paths.forEach((num) => {
    graph[num[0]].push(num[1]);
    graph[num[1]].push(num[0]);
  });
  var res = Array(n + 1);
  res.fill(0);
  var findFlower = (x) => {
    var lable = [0, 1, 2, 3, 4];
    graph[x].forEach((num) => {
      if (res[num] != 0) {
        lable[res[num]] = 0;
      }
    });
    for (var i = 1; i < 5; i++) {
      if (lable[i] != 0) {
        return i;
      }
    }
  };
  for (var i = 1; i < n + 1; i++) {
    res[i] = findFlower(i);
  }
  return res.slice(1, n + 1);
};
