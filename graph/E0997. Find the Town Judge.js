/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  var graph = Array(N + 1);
  for (var i = 0; i < N + 1; i++) {
    graph[i] = 0;
  }
  trust.forEach((num) => {
    graph[num[1]]++;
    graph[num[0]]--;
  });
  for (var i = 1; i < N + 1; i++) {
    if (graph[i] == N - 1) {
      return i;
    }
  }
  return -1;
};
