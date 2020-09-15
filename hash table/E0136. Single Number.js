/**
 * @param {number[]} nums
 * @return {number}
 */
//用hash表存储每个元素出现的次数
//输出出现次数（value）为1的值（key）
var singleNumber = function (nums) {
  var m = new Map();
  var r = -1;
  nums.forEach((num) => {
    m.set(num, m.has(num) ? 2 : 1);
  });
  m.forEach((value, key) => {
    if (value == 1) {
      r = key;
    }
  });
  return r;
};
console.log(singleNumber([4, 1, 2, 1, 2]));
