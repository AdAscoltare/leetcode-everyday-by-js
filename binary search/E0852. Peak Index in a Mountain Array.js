/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  var l = 0;
  var r = arr.length - 1;

  while (l < r) {
    var mid = Math.floor((l + r) / 2);
    if (arr[mid] < arr[mid + 1]) l = mid + 1;
    else if (arr[mid] > arr[mid + 1]) r = mid;
  }
  return l;
};
