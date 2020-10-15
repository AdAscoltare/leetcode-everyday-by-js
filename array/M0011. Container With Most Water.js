/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var l = height.length - 1;
  var max = 0;
  var left = 0;
  var right = l;
  while (left < right) {
    var tmp;
    if (height[left] < height[right]) {
      tmp = (right - left) * height[left];
      max = Math.max(tmp, max);
      left++;
    } else {
      tmp = (right - left) * height[right];
      max = Math.max(tmp, max);
      right--;
    }
  }
  return max;
};
