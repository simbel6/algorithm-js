/**
 * 1. 两数之和
 */

var twoSum1 = function (nums, target) {
  let idx, tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = target - nums[i];
    idx = nums.lastIndexOf(tmp);
    if (idx > 0 && idx !== i) {
      return [i, idx];
    }
  }
};

var twoSum2 = function (nums, target) {
  let map = {};
  let tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = target - nums[i];
    if (map[tmp] !== undefined) {
      return [i, map[tmp]];
    }
    map[nums[i]] = i;
  }
};

var twoSum = function (nums, target) {
    let map = {};
    let tmp;
    for (let i = 0; i < nums.length; i++) {
      tmp = target - nums[i];
      if (map[tmp] !== undefined) {
        return [i, map[tmp]];
      }
      map[nums[i]] = i;
    }
  };