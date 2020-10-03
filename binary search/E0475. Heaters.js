/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  var min_r = 0;
  heaters.sort((a, b) => {
    return a - b;
  });

  houses.forEach((num) => {
    min_r = Math.max(findClose(num, heaters), min_r);
  });
  return min_r;
};
var findClose = (num, heaters) => {
  var l = 0;
  var r = heaters.length - 1;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    var heater = heaters[mid];
    if (heater == num) return 0;
    if (heater < num) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  var l_dis = r >= 0 ? num - heaters[r] : Infinity;
  var r_dis = l < heaters.length ? heaters[l] - num : Infinity;
  return Math.min(l_dis, r_dis);
};
