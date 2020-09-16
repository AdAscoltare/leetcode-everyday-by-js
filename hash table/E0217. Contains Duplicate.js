/**
 * @param {number[]} nums
 * @return {boolean}
 */
//花里胡哨做法：把nums排序，看相邻元素是否有相等
//用nums初始化一个set，看set和nums长度是否相等
var containsDuplicate = function (nums) {
  var m = new Map();
  for (var item of nums) {
    if (m.has(item)) {
      return true;
    }
    m.set(item, 1);
  }
  return false;
};
