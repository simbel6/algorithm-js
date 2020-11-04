/**
 * 41. 缺失的第一个正数
 */

function firstMissingPositive(nums) {
  nums = nums.filter((i) => i > 0);

  for (let i = 0; i < nums.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIdx]) {
        minIdx = j;
      }
    }
    [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    if(nums[0] !== 1){
        return 1
    }
    if (i > 0 && nums[i] - nums[i - 1] > 1) {
      return nums[i - 1] + 1;
    } 
  }
  return nums.length ? nums.pop() + 1 : 1;
}

// console.log("firstMissingPositive", firstMissingPositive([2, 9, -1, 3]));

export default firstMissingPositive
