/**
 * 三数之和
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  if (!nums || nums.length < 3) {
    return res;
  }
  let l, r, sum;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = nums.length - 1;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
};
