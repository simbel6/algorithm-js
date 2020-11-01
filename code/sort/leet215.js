/**
 * 215. 数组中的第K个最大元素
 */

function findKthLargest(nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
}


export default findKthLargest