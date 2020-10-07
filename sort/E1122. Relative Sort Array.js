/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  var res = [];
  var map = [];
  //1000为数据最大值
  for (var i = 0; i <= 1000; i++) {
    map.push(0);
  }
  arr1.forEach((num) => {
    map[num]++;
  });
  arr2.forEach((num) => {
    var number = map[num];
    for (var i = 0; i < number; i++) {
      res.push(num);
    }
    map[num] = 0;
  });
  map.forEach((num, index) => {
    for (var i = 0; i < num; i++) {
      res.push(index);
    }
  });
  return res;
};
