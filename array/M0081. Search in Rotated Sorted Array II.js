var search = function (nums, target) {
  if (nums.length === 0 || typeof target === "undefined") return false;

  const len = nums.length;
  let left = 0,
    right = len - 1;

  while (left <= right) {
    const mid = (left + right) >>> 1;
    if (nums[mid] === target) return true;
    if (nums[left] === nums[mid]) left += 1;
    else if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};
