function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }
  let max = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    if (i != 0) {
      let tmp = nums[len - i] - nums[len - i - 1];
      if (tmp > max) {
        max = tmp;
      }
    }
  }
  return max;
}

export default maximumGap